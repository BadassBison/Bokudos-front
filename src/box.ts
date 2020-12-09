export class Box {
    private readonly ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    private boxSize: number = 50;
    private x: number = 30;
    private y: number = 30;
    private xSpeed: number = 0;
    private ySpeed: number = 0;
    private xAccel: number = 0;
    private yAccel: number = 0;
    private maxSpeed: number = 5;

    private readonly ACCELERATOR: number = 1;

    draw(): void {
        this.ctx.fillStyle = 'yellow';
        this.ctx.fillRect(
            this.x,
            this.y,
            this.boxSize,
            this.boxSize);
    }

    /**
     * Checks the direction of the speed and acceleration, returns true if they are equal.
     * @param speed
     * @param acceleration
     */
    isSameDirection(speed: number, acceleration: number): boolean {
        return (speed > 0 && acceleration > 0) || (speed < 0 && acceleration < 0);
    }

    getUpdatedSpeed(speed: number, acceleration: number, maxSpeed: number, accelerator: number): number {
        if(acceleration == 0) {
            return speed > 0 ? speed - accelerator : speed < 0 ? speed + accelerator : 0;
        } else {
            return this.isSameDirection(speed, acceleration) && Math.abs(speed + acceleration) > maxSpeed ? speed : speed + acceleration;
        }
    }

    updatePosition(): void {
        this.xSpeed = this.getUpdatedSpeed(this.xSpeed, this.xAccel, this.maxSpeed, this.ACCELERATOR);
        this.ySpeed = this.getUpdatedSpeed(this.ySpeed, this.yAccel, this.maxSpeed, this.ACCELERATOR);

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    /**
     * Handles keyboard events to control movement.
     * Use Arrow keys or WASD for movement.
     * @param keyboardEvent
     */
    handleMouseKeyDown(keyboardEvent: KeyboardEvent): void {
        switch (keyboardEvent.key) {
            case 'w':
            case 'ArrowUp':
                this.yAccel = -this.ACCELERATOR;
                break;
            case 'd':
            case 'ArrowRight':
                this.xAccel = this.ACCELERATOR;
                break;
            case 's':
            case 'ArrowDown':
                this.yAccel = this.ACCELERATOR;
                break;
            case 'a':
            case 'ArrowLeft':
                this.xAccel = -this.ACCELERATOR;
                break;
            default:
                break;
        }
    }

    /**
     * Handles keyboard events to control movement.
     * If user releases the key for the direction that the box is currently moving,
     * then the acceleration of that direction is set to 0.
     * @param keyboardEvent
     */
    handleMouseKeyUp(keyboardEvent: KeyboardEvent): void {
        switch (keyboardEvent.key) {
            case 'w':
            case 'ArrowUp':
                if (this.yAccel == -this.ACCELERATOR) {
                    this.yAccel = 0;
                }
                break;
            case 'd':
            case 'ArrowRight':
                if (this.xAccel == this.ACCELERATOR) {
                    this.xAccel = 0;
                }
                break;
            case 's':
            case 'ArrowDown':
                if (this.yAccel == this.ACCELERATOR) {
                    this.yAccel = 0;
                }
                break;
            case 'a':
            case 'ArrowLeft':
                if (this.xAccel == -this.ACCELERATOR) {
                    this.xAccel = 0;
                }
                break;
            default:
                break;
        }
    }

}
