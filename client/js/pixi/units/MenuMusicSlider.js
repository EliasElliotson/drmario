import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";
import { MenuSpriteSlider } from "../common/MenuSpriteSlider";

export class MenuMusicSlider extends PIXI.Container {
  heading;
  slider;
  focused = false;

  constructor() {
    super();

    this.heading = new MenuSpriteSlider([
      "./assets/nes/img/gui/menu-label-music.png",
      "./assets/nes/img/gui/menu-label-music-selected.png",
    ]);

    this.slider = new MenuSpriteSlider([
      "./assets/nes/img/gui/music-fever.png",
      "./assets/nes/img/gui/music-chill.png",
      "./assets/nes/img/gui/music-off.png",
    ]);

    this.slider.position.x = 20;
    this.slider.position.y = 25;

    this.addChild(this.heading);
    this.addChild(this.slider);
  }

  setFocused(focused) {
    this.focused = focused;
    this.heading.setValue(Number(focused));
  }

  get value() {
    return this.slider.value;
  }

  setValue(value) {
    value = Math.min(Math.max(value, 0), 2);
    this.slider.setValue(value);
  }
}
