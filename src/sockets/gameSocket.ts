import { OutPacket } from './outPacket';
import { Keys } from '../interfaces/keys';
import { GameDto } from '../interfaces/gameDto';
import { PlayerDto } from '../interfaces/playerDto';
import { ServerUpdatePacket } from './serverUpdatePacket';
import { State } from '../states/rootState';
import { Enemy } from '../objects/enemy';
import { UpdateObject } from '../interfaces/updateObject';

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
            // console.log("Message: " + event.data);
            const serverUpdatePacket: ServerUpdatePacket = JSON.parse(event.data);
            // console.log("Package Update Received: " + serverUpdatePacket.gameId);
            // This should probably be somewhere else..

            if (serverUpdatePacket.enemies != null) {
                new Map(Object.entries(serverUpdatePacket.enemies)).forEach((value, key) => {
                    if(State.gameState.assetMap == null) {
                        State.gameState.assetMap = new Map<string, UpdateObject>();
                    }
                    if(!State.gameState.assetMap.has(key)) {
                        const enemy = new Enemy(key);
                        enemy.updateStateAfterImagesLoad();
                        enemy.setPositionData(value);
                        State.gameState.assetMap.set(key, enemy);
                    } else {
                        State.gameState.assetMap.get(key).setPositionData(value);
                    }
                });
            }
        };
        this.webSocket.onclose = (event) => {
            this.setConnected(false);
            console.log('Close: ' + event);
        };
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
