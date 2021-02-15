import { State } from '../states/rootState';
import { StageDto } from '../interfaces/stageDto';
import { APIUtilities } from '../utilites/apiUtilities';

export class StageApiHelpers {

  static readonly baseUrl = `${APIUtilities.STAGE_BUILDER_URL}stage/`;
  static readonly userEndpoint = 'user/';
  static readonly searchEndpoint = 'search?';

  static async getPublishedStages() {
    const url = this.baseUrl;

    const stages = await APIUtilities.get<StageDto[]>(url);

    console.log('All Published Stages: ', stages);
    return stages;
  }

  static async getStagesByUser(userId: number): Promise<StageDto[]> {
    if (!userId) { return; }

    const url = this.baseUrl + this.userEndpoint + userId;

    const stages = await APIUtilities.get<StageDto[]>(url);

    console.log(`Stages for user with id ${userId}: `, stages);
    this.addStagesToState(stages);
    return stages;
  }

  static async getStageById(stageId: number) {
    if (!stageId) { return; }

    const url = this.baseUrl + stageId;

    const stage = await APIUtilities.get<StageDto>(url);

    console.log(`Stage with id ${stageId}: `, stage);
    this.addStagesToState([stage]);
    return stage;
  }

  static async searchStagesByName(searchTerm: string) {
    if (!searchTerm) { return; }
    const url = this.baseUrl;

    const paramName = 'name';
    const queryString = `${this.searchEndpoint}${paramName}=${searchTerm}`;

    const stages = await APIUtilities.get<StageDto[]>(url + queryString);

    console.log(`Stages with name similiar to ${searchTerm}: `, stages);
    this.addStagesToState(stages);
    return stages;
  }

  static async addStage(stage: StageDto): Promise<StageDto> {
    if (!stage) { return; }

    const url = this.baseUrl;
    const postedStage = await APIUtilities.post<StageDto>(url, stage);

    console.log(`${postedStage} was saved in the database`);
    return postedStage;
  }

  static async updateStage(stage: StageDto): Promise<StageDto> {
    if (!stage) { return; }

    console.log('stage', stage);
    const url = this.baseUrl + stage.stageId;
    const updatedStage = await APIUtilities.put<StageDto>(url, stage);
    console.log('updatedStage', updatedStage);
    return updatedStage;
  }

  private static addStagesToState(stages: StageDto[]) {
    State.stageState.stages = stages;
  }

}
