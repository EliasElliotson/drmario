export class LoopedAudio extends Audio {
  loopStart;
  loopEnd;

  constructor(url, loopStart, loopEnd) {
    super(url);

    this.loopStart = loopStart;
    this.loopEnd = loopEnd;

    this.addEventListener("timeupdate", () => {
      if (this.currentTime > this.loopEnd) {
        this.currentTime -= this.loopEnd - this.loopStart;
      }
    });
  }
}
