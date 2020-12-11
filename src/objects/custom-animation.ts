export class Animation {
    images: HTMLImageElement[];

    constructor(imagesSources: string[]) {
        this.images = [];
        for (const img of imagesSources) {
            const image = new Image();
            image.src = img;
            this.images.push(image);
        }
    }

    getImages(): HTMLImageElement[] {
        return this.images;
    }
}
