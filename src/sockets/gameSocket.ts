import { OutPacket } from './outPacket';
import { Keys } from '../interfaces/keys';
import { GameDto } from '../interfaces/gameDto';
import { PlayerDto } from '../interfaces/playerDto';

export class GameSocket {

    connected: boolean;
    webSocket: WebSocket;

    lastPacket: string;
    gameDto: GameDto;
    playerDto: PlayerDto;

    connect(gameDto: GameDto, playerDto: PlayerDto) {
        if(this.connected || (this.gameDto && this.gameDto.gameId !== gameDto.gameId)) {
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
            console.log("Message: " + event.data);
        };
        this.webSocket.onclose = (event) => {
            this.setConnected(false);
            console.log("Close: " + event);
        };
    }

    setConnected(connected: boolean): void {
        this.connected = connected;
    }

    disconnect(): void {
            if(this.webSocket != null) {
                this.webSocket.close();
            }
            this.webSocket = null;
        this.connected = false;

        console.log("Disconnected");
    }

    sendKeys(keys: Keys): void {
        const packet = new OutPacket();
        packet.from = this.playerDto.playerId;
        packet.keys = keys;

        const packetString = JSON.stringify(packet);
        if(this.connected && this.lastPacket !== packetString) {
                this.webSocket.send(packetString);
            this.lastPacket = packetString;
        }
    }
}
