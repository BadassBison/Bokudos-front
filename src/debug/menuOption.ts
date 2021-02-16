export class MenuOption {
    name: string;
    enabled: boolean;
    color: string;
    colorEnabled: boolean;
    lineWidth: number;
    font: string;

    constructor(name: string, color = 'black') {
        this.name = name;
        this.enabled = false;
        this.color = color;
        this.colorEnabled = true;
        this.lineWidth = 1;
        this.font = '12px serif';
    }
}
