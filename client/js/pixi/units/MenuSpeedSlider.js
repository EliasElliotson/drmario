import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";
import { MenuSpriteSlider } from "../common/MenuSpriteSlider";
import { MenuSlider } from "../common/MenuSlider";

export class MenuSpeedSlider extends PIXI.Container {
  heading;
  slider;
  focused = false;

  constructor() {
    super();

    // Speed heading
    this.heading = new MenuSpriteSlider([
      "./assets/nes/img/gui/menu-label-speed.png",
      "./assets/nes/img/gui/menu-label-speed-selected.png",
    ]);

    // Speed slider
    this.slider = new MenuSlider(
      {
        sprite: "./assets/nes/img/gui/speed-scale.png",
        tickSize: 38,
        maxValue: 2,
      },
      "./assets/nes/img/gui/speed-selector-p1.png",
      "./assets/nes/img/gui/speed-selector-p2.png"
    );
    this.slider.setPlayer1Value(1);
    this.slider.setPlayer2Value(1);
    this.slider.position.x = 49;
    this.slider.position.y = 29;

    // Add the elements to the container
    this.addChild(this.heading);
    this.addChild(this.slider);
  }

  setFocused(focused) {
    this.focused = focused;
    this.heading.setValue(Number(focused));
  }

  get player1Value() {
    return this.slider.player1Value;
  }

  get player2Value() {
    return this.slider.player2Value;
  }

  setPlayer1Value(value) {
    value = Math.min(Math.max(value, 0), 2);
    this.slider.setPlayer1Value(value);
  }

  setPlayer2Value(value) {
    value = Math.min(Math.max(value, 0), 2);
    this.slider.setPlayer1Value(value);
  }
}
