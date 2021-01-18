import { State } from '../../states/rootState';
import ComponentUtilities from '../../utilites/componentUtilities';

export class TileBuilder {

  static openTileSelector(): void {
    State.builderState.tileSelectorOpen = true;
    State.domState.builder.tileSelectorCheckbox.checked = State.builderState.tileSelectorOpen;
    State.domState.builder.tileSelector = ComponentUtilities.nodeBuilder('content', '<h1 class="title">Tile Selector</h1>', ['builder--tile-selector']);
    this.addTiles(State.domState.builder.tileSelector);

    ComponentUtilities.appendNodeToBody(State.domState.builder.tileSelector);
  }

  static removeTileSelector() {
    if (State.domState.builder.tileSelector) {
      State.domState.builder.tileSelector.remove();
      State.domState.builder.tileSelector = null;
      State.builderState.tileSelectorOpen = false;
      State.domState.builder.tileSelectorCheckbox = null;
    }
  }

  static toggleTileSelector(): void {
    if (State.builderState.tileSelectorOpen) {
      State.domState.builder.tileSelector.classList.add('hidden');
      State.builderState.tileSelectorOpen = false;
    } else {
      State.domState.builder.tileSelector.classList.remove('hidden');
      State.builderState.tileSelectorOpen = true;
    }
    State.domState.builder.tileSelectorCheckbox.checked = State.builderState.tileSelectorOpen;
  }

  static addTiles(tileSelector: HTMLElement) {
    let imgRowWrapper: HTMLElement;
    for (let i = 1; i <= 18; i++) {
      const img = State.tileSetState.imageMap.get(i);
      img.classList.add('builder--tile-image');
      img.addEventListener('click', (evt: MouseEvent) => this.selectedTile(evt));
      img.id = `img-${i}`;
      img.alt = `Tile image ${i}`;

      if (i % 3 === 1) {
        imgRowWrapper = document.createElement('div');
        imgRowWrapper.classList.add('tile-selector-img-row');
        tileSelector.appendChild(imgRowWrapper);
      }
      imgRowWrapper.appendChild(img);
    }
    this.setActiveTile(State.tileSetState.imageMap.get(1));
  }

  static selectedTile(evt: MouseEvent) {
    this.setActiveTile(evt.currentTarget as HTMLElement);
  }

  static setActiveTile(tile: HTMLElement): void {
    if (State.domState.builder.selectedTile) {
      State.domState.builder.selectedTile.classList.remove('active');
    }
    tile.classList.add('active');
    State.domState.builder.selectedTile = tile;
  }

}
