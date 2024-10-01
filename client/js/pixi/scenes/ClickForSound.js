//enable-sound.png
import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";
import { TiledBackground } from "../common/TiledBackground";

export class ClickForSoundScene extends PIXI.Container {
  background;
  clickForSoundSprite;

  constructor() {
    super();

    this.background = new TiledBackground('./assets/nes/img/bg/enable-sound.png');
    this.clickForSoundSprite = PIXI.Sprite.from('./assets/nes/img/gui/click-to-enable-sound.png')

    this.addChild(this.background);
    this.addChild(this.clickForSoundSprite);

    this.updateMessageDynamics();

    window.addEventListener("resize", () => {
      this.updateMessageDynamics();
    })

    this.clickForSoundSprite.texture.baseTexture.on("loaded", () => {
      this.updateMessageDynamics(); 
    });
  }

  updateMessageDynamics() {
    const scale = Math.min(window.innerWidth / 256, window.innerHeight / 224);

    this.clickForSoundSprite.scale.x = scale;
    this.clickForSoundSprite.scale.y = scale;
    this.clickForSoundSprite.position.x = ((this.width / this.scale.x) - this.clickForSoundSprite.width) / 2;
    this.clickForSoundSprite.position.y = ((this.height / this.scale.y) - this.clickForSoundSprite.height) / 2;
  }
}
