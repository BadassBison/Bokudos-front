import { APIUtilities } from '../utilites/apiUtilities';

export class StageApiHelpers {

  static readonly stageEndpoint = 'stage/';

  static async getStages() {
    const url = APIUtilities.stageBuilderApiUrl + this.stageEndpoint;

    const stages = await APIUtilities.get(url);

    console.log('All Stages: ', stages);
    return stages;
  }

  static async getStage(stageId: number) {
    if (!stageId) { return; }

    const url = APIUtilities.stageBuilderApiUrl + this.stageEndpoint + stageId;

    const stage = await APIUtilities.get(url);

    console.log(`Stage with id ${stageId}: `, stage);
    return stage;
  }

  static async searchStagesByName(searchTerm: string) {
    if (!searchTerm) { return; }
    const url = APIUtilities.stageBuilderApiUrl + this.stageEndpoint;

    const paramName = 'name';
    const queryString = `${APIUtilities.searchEndpoint}${paramName}=${searchTerm}`;

    const stages = await APIUtilities.get(url + queryString);

    console.log(`Stages with name similiar to ${searchTerm}: `, stages);
    return stages;
  }
}
