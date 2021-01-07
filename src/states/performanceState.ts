import { Queue } from '../dataStructures/queue';

export class PerformanceState {

  frameTimesQueue: Queue;
  watcher: NodeJS.Timeout;

  constructor() {
    this.frameTimesQueue = new Queue(100);
  }

  addFrameTime(time: number): void {
    this.frameTimesQueue.add(time);
  }

  calculateAverageFrameTime(): string {
    const totalFrames = this.frameTimesQueue.size;
    let prevFrameTime = this.frameTimesQueue.remove();
    let frameTimeSum = 0;
    while (this.frameTimesQueue.size > 0) {
      const curFrameTime = this.frameTimesQueue.remove();
      frameTimeSum += curFrameTime - prevFrameTime;
      prevFrameTime = curFrameTime;
    }
    const time = Math.floor(frameTimeSum / totalFrames);
    return time + ' ms';
  }

  watchAvgFrameTime(): string {
    this.watcher = setInterval(() => console.log(this.calculateAverageFrameTime()), 2000);
    return 'Starting frame tracker';
  }

  stopWatching(): void {
    clearTimeout(this.watcher);
    console.log('Stopping frame tracker');
  }
}
