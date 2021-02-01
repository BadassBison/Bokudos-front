import { PositionData } from '../interfaces/positionData';

export class ServerUpdatePacket {
    gameId: string;
    players: Map<string, PositionData>;
    enemies: Map<string, PositionData>;
}
