import { MenuOption } from '../debug/menuOption';
import { MenuOptions } from '../constants/menuOptions';

export class DebugState {

    debugMode: boolean;
    handleMouseMove: boolean;
    hasButtons: boolean;
    menuOpen: boolean;
    menuOptions: { [key: string]: MenuOption };
    propertiesOpen: boolean;
    defaultColor: string;
    defaultLineWidth: number;

    constructor(debugMode: boolean = false) {
        this.debugMode = debugMode;
        this.handleMouseMove = false;

        this.hasButtons = debugMode;
        this.menuOpen = false;
        this.propertiesOpen = false;

        const menuOptionsJson = localStorage.getItem('menuOptions');
        if (menuOptionsJson) {
            this.menuOptions = JSON.parse(menuOptionsJson);
        } else {
            this.menuOptions = {};
            MenuOptions.getOptionList().forEach((optionName: string) => {
                const option = new MenuOption(optionName);
                this.menuOptions[optionName] = option;
            });
            this.menuOptions[MenuOptions.COORDINATES].lineWidth = null;
        }
    }
}
