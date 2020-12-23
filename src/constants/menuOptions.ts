export class MenuOptions {
    public static GRID = 'Grid';
    public static COORDINATES = 'Coordinates';
    public static SCREEN_EDGE = 'Screen Edge';
    public static HITBOX = 'Hitbox';
    public static DETECTION_BOX = 'Detection Box';
    public static DETECTED_TILES = 'Detected Tiles';
    public static COLLISION_TILES = 'Collision Tiles';

    static getOptionList(): string[] {
        return [
            this.GRID,
            this.COORDINATES,
            this.SCREEN_EDGE,
            this.HITBOX,
            this.DETECTION_BOX,
            this.DETECTED_TILES,
            this.COLLISION_TILES,
        ];
    }
}
