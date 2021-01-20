import { APIUtilities } from '../utilites/apiUtilities';
import { PlayerDto } from '../interfaces/playerDto';
import { GameDto } from '../interfaces/gameDto';
import { v4 as uuidv4 } from 'uuid';

export class PlayerApiHelpers {

    static readonly PLAYER_API_VERSION = 'v1';
    static readonly PLAYER_API_ENDPOINT = `${APIUtilities.GAME_SERVER_URL}${PlayerApiHelpers.PLAYER_API_VERSION}/games`;

    private static getEndpoint(gameId: string, playerId?: string) {
        return this.PLAYER_API_ENDPOINT + '/' + gameId + '/players' + (playerId ? '/' + playerId : '');
    }

    static async joinGame(gameId: string, name: string): Promise<PlayerDto> {
        const player: PlayerDto = {playerId: uuidv4(), name: name};
        return this.postPlayer(gameId, player);
    }

    static async getPlayers(gameId: string): Promise<PlayerDto[]> {
        const url = this.getEndpoint(gameId);
        const players = await APIUtilities.get<PlayerDto[]>(url);
        console.log('Players: ', players);
        return players;
    }

    static async getPlayer(gameId: string, playerId: string): Promise<PlayerDto> {
        const url = this.getEndpoint(gameId, playerId);
        const player = await APIUtilities.get<PlayerDto>(url);
        console.log(`Player ${playerId}: `, player);
        return player;
    }

    static async postPlayer(gameId: string, player: PlayerDto): Promise<PlayerDto> {
        const url = this.getEndpoint(gameId);
        const response = await APIUtilities.post<PlayerDto>(url, player);
        console.log(`Player Added: ${response.playerId}`);
        return response;
    }

    static async putPlayer(gameId: string, player: PlayerDto): Promise<PlayerDto> {
        const url = this.getEndpoint(gameId);
        const response = await APIUtilities.put<PlayerDto>(url, player);
        console.log(`Player Updated: ${response.playerId}`);
        return response;
    }

    static async deletePlayer(gameId: string, playerId: string) {
        const url = this.getEndpoint(gameId, playerId);
        const response = await APIUtilities.delete(url);
        console.log(`Player Deleted: ${playerId}`);
        return response;
    }

}
