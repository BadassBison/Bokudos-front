export class MenuOptions {
    public static PLAYER_SPRITES = 'Player Sprite';
    public static PLAYER_OUTLINE = 'Player Outline';
    public static ENEMY_SPRITES = 'Enemy Sprites';
    public static ENEMY_OUTLINE = 'Enemy Outline';
    public static GRID = 'Grid';
    public static COORDINATES = 'Coordinates';
    public static SCREEN_EDGE = 'Screen Edge';
    public static HITBOX = 'Hitbox';
    public static ATTACK_HITBOX = 'Attack Hitbox';
    public static ENEMY_HITBOX = 'Enemy Hitbox';
    public static DETECTION_BOX = 'Detection Box';
    public static DETECTED_TILES = 'Detected Tiles';
    public static COLLISION_TILES = 'Collision Tiles';

    static getOptionList(): string[] {
        return [
            this.PLAYER_SPRITES,
            this.PLAYER_OUTLINE,
            this.ENEMY_SPRITES,
            this.ENEMY_OUTLINE,
            this.GRID,
            this.COORDINATES,
            this.SCREEN_EDGE,
            this.HITBOX,
            this.ATTACK_HITBOX,
            this.ENEMY_HITBOX,
            this.DETECTION_BOX,
            this.DETECTED_TILES,
            this.COLLISION_TILES,
        ];
    }
}
