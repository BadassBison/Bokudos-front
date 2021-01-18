import { v4 as uuidv4 } from 'uuid';
import { OutPacket } from './outPacket';
import { Keys } from '../interfaces/keys';

export class GameSocket {

    connected: boolean;
    userId: string;
    webSocket: WebSocket;

    lastPacket: string;

    connect() {
        if(this.connected) {
            this.disconnect();
        }
        this.userId = uuidv4();
        this.webSocket = new WebSocket('ws://localhost:8082/api/play/');
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
        packet.from = this.userId;
        packet.keys = keys;

        const packetString = JSON.stringify(packet);
        if(this.connected && this.lastPacket !== packetString) {
                this.webSocket.send(packetString);
            this.lastPacket = packetString;
        }
    }
}
