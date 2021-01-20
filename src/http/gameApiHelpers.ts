import { APIUtilities } from '../utilites/apiUtilities';
import { GameDto } from '../interfaces/gameDto';
import { v4 as uuidv4 } from 'uuid';

export class GameApiHelpers {

    static readonly GAME_API_VERSION = 'v1';
    static readonly GAME_API_ENDPOINT = `${APIUtilities.GAME_SERVER_URL}${GameApiHelpers.GAME_API_VERSION}/games`;

    static async findGame(): Promise<GameDto> {
        return this.getGames().then((games: GameDto[]) => {
            if(games.length > 0) {
                return games[0];
            } else {
                const gameId = uuidv4();
                const newGame: GameDto = {gameId: gameId, gameStatus: 'OPEN', stageId: 1};
                return this.postGame(newGame);
            }
        })
    }

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
