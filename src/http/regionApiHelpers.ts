import { Region } from '../interfaces/region';
import { APIUtilities } from '../utilites/apiUtilities';

export class RegionApiHelpers {

  static readonly regionEndpoint = 'region/';

  static async getRegions(): Promise<Region[]> {
    const url = APIUtilities.stageBuilderApiUrl + this.regionEndpoint;

    const regions = await APIUtilities.get<Region[]>(url);

    console.log('All Regions: ', regions);
    return regions;
  }

  static async getRegionsForStage(stageId: number): Promise<Region[]> {
    const url = APIUtilities.stageBuilderApiUrl + this.regionEndpoint + stageId;

    const regions: Region[] = await APIUtilities.get<Region[]>(url);

    console.log(`All Regions for StageId ${stageId}: `, regions);
    return regions;
  }

  static async getSpecificRegionForStage(stageId: number, row: number, column: number): Promise<Region> {
    const url = APIUtilities.stageBuilderApiUrl + this.regionEndpoint + stageId + '/';

    const paramRow = 'row';
    const paramColumn = 'column';
    const queryString = `${APIUtilities.searchEndpoint}${paramRow}=${row}&${paramColumn}=${column}`;

    const region: Region = await APIUtilities.get<Region>(url + queryString);

    return region;
  }

  static async addRegion(requestRegion: Region): Promise<Region> {
    const url = APIUtilities.stageBuilderApiUrl + this.regionEndpoint;

    return await APIUtilities.post<Region>(url, requestRegion);
  }

}
