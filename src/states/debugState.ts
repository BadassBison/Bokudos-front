import { MenuOption } from '../debug/menuOption';
import { MenuOptions } from '../constants/menuOptions';

export class DebugState {

    debugMode: boolean;
    handleMouseMove: boolean;
    hasButtons: boolean;
    menuOpen: boolean;
    menuOptions: { [key: string]: MenuOption };
    propertiesOpen: boolean;

    constructor() {
        this.debugMode = false;
        this.handleMouseMove = false;
        this.hasButtons = false;
        this.menuOpen = false;
        this.propertiesOpen = false;

        const menuOptionsJson = localStorage.getItem('menuOptions');
        if (menuOptionsJson) {
            this.menuOptions = JSON.parse(menuOptionsJson);
        } else {
            this.menuOptions = {};
        }

        MenuOptions.getOptionList().forEach((optionName: string) => {
            if(!this.menuOptions[optionName]) {
                const option = new MenuOption(optionName);
                this.menuOptions[optionName] = option;
            }
        });
        this.menuOptions[MenuOptions.PLAYER_SPRITES].lineWidth = null;
        this.menuOptions[MenuOptions.PLAYER_SPRITES].colorEnabled = false;
        this.menuOptions[MenuOptions.ENEMY_SPRITES].lineWidth = null;
        this.menuOptions[MenuOptions.ENEMY_SPRITES].colorEnabled = false;
        this.menuOptions[MenuOptions.COORDINATES].lineWidth = null;
    }
}
