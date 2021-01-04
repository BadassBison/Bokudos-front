import { RegionDto } from '../interfaces/regionDto';
import { APIUtilities } from '../utilites/apiUtilities';
import { State } from '../states/rootState';
import { StageTile } from '../objects/stageTile';
import { BoxSides } from '../interfaces/boxSides';
import { Point } from '../interfaces/point';
import { Neighbors } from '../interfaces/neighbors';

export class RegionApiHelpers {

  static readonly baseUrl = `${APIUtilities.devUrl}region/`;
  static readonly searchEndpoint = 'search?';

  static async getRegions(): Promise<RegionDto[]> {
    const url = this.baseUrl;

    const regions = await APIUtilities.get<RegionDto[]>(url);

    console.log('All Regions: ', regions);
    return regions;
  }

  static async getAllRegionsForStage(stageId: number): Promise<RegionDto[]> {
    const url = this.baseUrl + stageId;

    const regions = await APIUtilities.get<RegionDto[]>(url);

    console.log(`All Regions for StageId ${stageId}: `, regions);
    return regions;
  }

  static async getRegionForStage(stageId: number, row: number, column: number): Promise<RegionDto> {
    const url = this.baseUrl + stageId + '/' + this.searchEndpoint;

    const queryString = `row=${row}&column=${column}`;

    const regionDto = await APIUtilities.get<RegionDto>(url + queryString);
    if (regionDto) {
      this.addRegionToState(regionDto, row, column);
    }

    return regionDto;
  }

  static async getNeighboringRegionsForStage(stageId: number, currentRow: number, currentColumn: number) {
    const neighbors: Neighbors = {
      top: {
        x: currentColumn,
        y: currentRow + State.stageState.regionSize
      },
      bottom: {
        x: currentColumn,
        y: currentRow - State.stageState.regionSize
      },
      left: {
        x: currentColumn - State.stageState.regionSize,
        y: currentRow
      },
      right: {
        x: currentColumn + State.stageState.regionSize,
        y: currentRow
      }
    };

    const { top, bottom, left, right } = neighbors;
    [top, bottom, left, right].forEach(neighbor => {

    });
  }

  static async postRegion(row: number, column: number): Promise<RegionDto> {
    const url = this.baseUrl;

    const requestRegion: RegionDto = {
      stageId: State.gameState.defaultStageId,
      row,
      column,
      data: this.encodeRegionData(row, column)
    };

    return await APIUtilities.post<RegionDto>(url, requestRegion);
  }

  private static addRegionToState(regionDto: RegionDto, row: number, column: number) {
    State.stageState.regions.push(`${column}-${row}`);
    this.reduceRegionDtoIntoTiles(regionDto, row, column);
  }

  private static async reduceRegionDtoIntoTiles(regionDto: RegionDto, regionRow: number, regionColumn: number): Promise<void> {

    const regionData = this.decodeRegionData(regionDto);

    for (let row = regionRow; row < regionRow + State.stageState.regionSize; row++) {
      for (let col = regionColumn; col < regionRow + State.stageState.regionSize; col++) {
        const gridRow = State.stageState.regionSize - row;
        State.stageState.tiles.set(`${col}-${gridRow}`, new StageTile(gridRow, col, regionData[row][col] || '0'));
      }
    }
  }

  private static decodeRegionData(regionDto: RegionDto): string[][] {
    const tileList: string[][] = [];
    regionDto.data.split('n').forEach(row => tileList.push(row.split(',')));
    return tileList;
  }

  private static encodeRegionData(regionRow: number, regionColumn: number): string {
    let data = '';

    for (let row = regionRow; row < regionRow + State.stageState.regionSize; row++) {
      if (data.length !== 0) { data += 'n'; }

      for (let col = regionColumn; col < regionColumn + State.stageState.regionSize; col++) {
        if (data[data.length - 1] !== 'n' && data.length !== 0) { data += ','; }
        const gridRow = State.stageState.regionSize - row;
        const tile = State.stageState.tiles.get(`${col}-${gridRow}`);
        data += tile ? tile.lookupValue : '0';
      }
    }

    return data;
  }
}
