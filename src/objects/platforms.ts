// @ts-ignore
import p1 from '../../assets/sprites/tileset_1/Tiles/1.png';
// @ts-ignore
import p2 from '../../assets/sprites/tileset_1/Tiles/2.png';
// @ts-ignore
import p3 from '../../assets/sprites/tileset_1/Tiles/3.png';
// @ts-ignore
import p4 from '../../assets/sprites/tileset_1/Tiles/4.png';
// @ts-ignore
import p5 from '../../assets/sprites/tileset_1/Tiles/5.png';
// @ts-ignore
import p6 from '../../assets/sprites/tileset_1/Tiles/6.png';
// @ts-ignore
import p7 from '../../assets/sprites/tileset_1/Tiles/7.png';
// @ts-ignore
import p8 from '../../assets/sprites/tileset_1/Tiles/8.png';
// @ts-ignore
import p9 from '../../assets/sprites/tileset_1/Tiles/9.png';
// @ts-ignore
import p10 from '../../assets/sprites/tileset_1/Tiles/10.png';
// @ts-ignore
import p11 from '../../assets/sprites/tileset_1/Tiles/11.png';
// @ts-ignore
import p12 from '../../assets/sprites/tileset_1/Tiles/12.png';
// @ts-ignore
import p13 from '../../assets/sprites/tileset_1/Tiles/13.png';
// @ts-ignore
import p14 from '../../assets/sprites/tileset_1/Tiles/14.png';
// @ts-ignore
import p15 from '../../assets/sprites/tileset_1/Tiles/15.png';
// @ts-ignore
import p16 from '../../assets/sprites/tileset_1/Tiles/16.png';
// @ts-ignore
import p17 from '../../assets/sprites/tileset_1/Tiles/17.png';
// @ts-ignore
import p18 from '../../assets/sprites/tileset_1/Tiles/18.png';

import { ImageBuilder } from '../animations/imageBuilder';
import { PlatformSides } from '../interfaces/platformSides';

export class Platforms {

    imageMap: Map<number, HTMLImageElement>;
    collisionMap: Map<number, PlatformSides>;

    constructor() {
        this.imageMap = new Map();
        this.collisionMap = new Map();

        const imageSrc = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18];
        const imgObj = new ImageBuilder(imageSrc);
        const imageList = imgObj.getImages();

        imageList.forEach((img: HTMLImageElement, index: number) => {
            this.imageMap.set(index + 1, img);
        });

        this.collisionMap.set(0, { top: false, right: false, bottom: false, left: false });
        this.collisionMap.set(1, { top: true, right: false, bottom: false, left: true });
        this.collisionMap.set(2, { top: true, right: false, bottom: false, left: false });
        this.collisionMap.set(3, { top: true, right: true, bottom: false, left: false });
        this.collisionMap.set(4, { top: false, right: false, bottom: false, left: true });
        this.collisionMap.set(5, { top: false, right: false, bottom: false, left: false });
        this.collisionMap.set(6, { top: false, right: true, bottom: false, left: false });
        this.collisionMap.set(7, { top: true, right: false, bottom: false, left: false });
        this.collisionMap.set(8, { top: false, right: false, bottom: false, left: false });
        this.collisionMap.set(9, { top: false, right: false, bottom: true, left: false });
        this.collisionMap.set(10, { top: false, right: false, bottom: false, left: false });
        this.collisionMap.set(11, { top: true, right: false, bottom: false, left: false });
        this.collisionMap.set(12, { top: false, right: false, bottom: true, left: true });
        this.collisionMap.set(13, { top: true, right: false, bottom: false, left: false });
        this.collisionMap.set(14, { top: true, right: false, bottom: false, left: false });
        this.collisionMap.set(15, { top: true, right: false, bottom: true, left: false });
        this.collisionMap.set(16, { top: false, right: true, bottom: true, left: false });
    }



}
