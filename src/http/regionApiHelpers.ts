import { RegionDto } from '../interfaces/regionDto';
import { APIUtilities } from '../utilites/apiUtilities';
import { State } from '../states/rootState';
import { StageTile } from '../objects/stageTile';
import { Neighbors } from '../interfaces/neighbors';

export class RegionApiHelpers {

  static readonly baseUrl = `${APIUtilities.STAGE_BUILDER_URL}region/`;

  static async getRegions(): Promise<RegionDto[]> {
    const url = this.baseUrl;

    const regions = await APIUtilities.get<RegionDto[]>(url);

    return regions;
  }

  static async getAllRegionsForStage(stageId: number): Promise<RegionDto[]> {
    const url = this.baseUrl + stageId;

    const regions = await APIUtilities.get<RegionDto[]>(url);

    if (regions.length > 0) {
      regions.forEach((region: RegionDto) => {
        this.addRegionToState(region, region.row, region.column);
      });
    }

    return regions;
  }

  static async getRegionForStage(stageId: number, row: number, column: number): Promise<RegionDto> {

    const url = `${this.baseUrl}${stageId}/${row}/${column}`;

    const regionDto = await APIUtilities.get<RegionDto>(url);
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
    console.log('postRegion', row, column);
    const url = this.baseUrl;

    const requestRegion: RegionDto = {
      stageId: State.gameState.stageId,
      row,
      column,
      data: this.encodeRegionData(row * State.stageState.regionSize, column * State.stageState.regionSize)
    };

    return await APIUtilities.post<RegionDto>(url, requestRegion);
  }

  private static addRegionToState(regionDto: RegionDto, row: number, column: number) {
    State.stageState.regions.add(`${column}${State.stageState.colRowSeparator}${row}`);
    this.reduceRegionDtoIntoTiles(regionDto, row, column);
  }

  private static async reduceRegionDtoIntoTiles(regionDto: RegionDto, regionRow: number, regionColumn: number): Promise<void> {

    const regionData = this.decodeRegionData(regionDto);
    const regionX = regionColumn * State.stageState.regionSize;
    const regionY = regionRow * State.stageState.regionSize;

    for (let row = 0; row < State.stageState.regionSize; row++) {
      const gridY = regionY + State.stageState.regionSize - row;

      for (let col = 0; col < State.stageState.regionSize; col++) {
        const gridX = regionX + col;

        State.stageState.tiles.set(`${gridX}${State.stageState.colRowSeparator}${gridY}`, new StageTile(gridY, gridX, regionData[row][col] || '0'));
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
      const gridRow = (regionRow + State.stageState.regionSize) - (row - regionRow);

      for (let col = regionColumn; col < regionColumn + State.stageState.regionSize; col++) {
        if (data[data.length - 1] !== 'n' && data.length !== 0) { data += ','; }

        const tile = State.stageState.tiles.get(`${col}${State.stageState.colRowSeparator}${gridRow}`);
        data += tile ? tile.lookupValue : '0';
      }
    }

    return data;
  }
}
