import { APIUtilities } from '../utilites/apiUtilities';
import { GameDto } from '../interfaces/gameDto';

export class GameApiHelpers {

    static readonly GAME_API_VERSION = 'v1';
    static readonly GAME_API_ENDPOINT = `${APIUtilities.GAME_SERVER_URL}/${GameApiHelpers.GAME_API_VERSION}/games`;

    static async getGames(): Promise<GameDto[]> {
        const url = this.GAME_API_ENDPOINT;
        const games = await APIUtilities.get<GameDto[]>(url);
        console.log('Games: ', games);
        return games;
    }

    static async getGame(gameId: string): Promise<GameDto> {
        const url = this.GAME_API_ENDPOINT + '/' + gameId;
        const game = await APIUtilities.get<GameDto>(url);
        console.log(`Game ${gameId}: `, game);
        return game;
    }

    static async postGame(game: GameDto): Promise<GameDto> {
        const url = this.GAME_API_ENDPOINT;
        const response = await APIUtilities.post<GameDto>(url, game);
        console.log(`Game Added: ${game.gameId}`);
        return response;
    }

    static async putGame(game: GameDto): Promise<GameDto> {
        const url = this.GAME_API_ENDPOINT;
        const response = await APIUtilities.put<GameDto>(url, game);
        console.log(`Game Updated: ${game.gameId}`);
        return response;
    }

    static async deleteGame(gameId: string) {
        const url = this.GAME_API_ENDPOINT + '/' + gameId;
        const response = await APIUtilities.delete(url);
        console.log(`Game Deleted: ${gameId}`);
        return response;
    }

}
