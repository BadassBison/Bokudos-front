import { OutPacket } from './outPacket';
import { Keys } from '../interfaces/keys';
import { GameDto } from '../interfaces/gameDto';
import { PlayerDto } from '../interfaces/playerDto';
import { ServerUpdatePacket } from './serverUpdatePacket';
import { State } from '../states/rootState';
import { Enemy } from '../objects/enemy';
import { UpdateObject } from '../interfaces/updateObject';
import { PositionData } from '../interfaces/positionData';
import { Player } from '../objects/player';
import { AssetType } from '../enums/assetType';
import { RenderingUtilities } from '../utilites/renderingUtilities';

export class GameSocket {

    connected: boolean;
    webSocket: WebSocket;

    lastPacket: string;
    gameDto: GameDto;
    playerDto: PlayerDto;

    connect(gameDto: GameDto, playerDto: PlayerDto) {
        if (this.connected || (this.gameDto && this.gameDto.gameId !== gameDto.gameId)) {
            this.disconnect();
        }
        this.gameDto = gameDto;
        this.playerDto = playerDto;
        this.webSocket = new WebSocket(`ws://localhost:8082/api/play/${this.gameDto.gameId}`);
        this.webSocket.onopen = (event) => {
            this.setConnected(true);
            console.log('Open: ', event);
        };
        this.webSocket.onmessage = (event) => {
            const serverUpdatePacket: ServerUpdatePacket = JSON.parse(event.data);

            if(serverUpdatePacket.players != null) {
                this.updateAssets(serverUpdatePacket.players);
            }
            if (serverUpdatePacket.enemies != null) {
                this.updateAssets(serverUpdatePacket.enemies);
            }
        };
        this.webSocket.onclose = (event) => {
            this.setConnected(false);
            console.log('Close: ' + event);
        };
    }

    updateAssets(assets: Map<string, PositionData>): void {
        new Map(Object.entries(assets)).forEach((value, key) => {
            if(State.gameState.assetMap == null) {
                State.gameState.assetMap = new Map<string, UpdateObject>();
            }
            if(!State.gameState.assetMap.has(key)) {
                const asset = value.assetType === AssetType.ENEMY ? new Enemy(key) : new Player(key);
                asset.setPositionData(value);
                State.gameState.assetMap.set(key, asset);
            } else {
                State.gameState.assetMap.get(key).setPositionData(value);
            }
            if(key === this.playerDto.playerId) {
                RenderingUtilities.setScreenPositionFromCenter({x: value.x, y: value.y});
            }
        });
    }

    setConnected(connected: boolean): void {
        this.connected = connected;
    }

    disconnect(): void {
        if (this.webSocket != null) {
            this.webSocket.close();
        }
        this.webSocket = null;
        this.connected = false;

        console.log('Disconnected');
    }

    sendKeys(keys: Keys): void {
        const packet = new OutPacket();
        packet.playerId = this.playerDto ? this.playerDto.playerId : null;
        packet.keys = keys;

        const packetString = JSON.stringify(packet);
        if (this.connected && this.lastPacket !== packetString && packet.playerId) {
            this.webSocket.send(packetString);
            this.lastPacket = packetString;
        }
    }
}
