export class MenuOption {
    name: string;
    enabled: boolean;
    color: string;
    lineWidth: number;
    font: string;

    constructor(name: string, color = 'black') {
        this.name = name;
        this.enabled = false;
        this.color = color;
        this.lineWidth = 1;
        this.font = '12px serif';
    }
}
