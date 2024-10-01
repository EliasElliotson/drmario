import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";
import { MenuSlider } from "../common/MenuSlider.js";
import { DisplayNumber } from "../common/DisplayNumber.js";
import { MenuSpriteSlider } from "../common/MenuSpriteSlider.js";

export class MenuVirusSlider extends PIXI.Container {
  heading;
  slider;
  player1VirusCount;
  player2VirusCount;
  player1VirusCountOutline;
  player2VirusCountOutline;
  focused = false;

  constructor() {
    super();

    // Virus count heading
    this.heading = new MenuSpriteSlider([
      "./assets/nes/img/gui/menu-label-viruses.png",
      "./assets/nes/img/gui/menu-label-viruses-selected.png",
    ]);
    this.addChild(this.heading);

    // Virus count slider
    this.slider = new MenuSlider(
      {
        sprite: "./assets/nes/img/gui/virus-scale.png",
        tickSize: 4,
        maxValue: 20,
      },
      "./assets/nes/img/gui/virus-selector-p1.png",
      "./assets/nes/img/gui/virus-selector-p2.png"
    );
    this.slider.position.x = 48;
    this.slider.position.y = 35;
    this.addChild(this.slider);

    // Player 1 virus count number
    this.player1VirusCount = new DisplayNumber("./assets/nes/img/gui/numbers.png", 2);
    this.player1VirusCount.setNumber(0);
    this.player1VirusCount.position.x = 145;
    this.player1VirusCount.position.y = 22;
    this.addChild(this.player1VirusCount);

    // Player 2 virus count number
    this.player2VirusCount = new DisplayNumber("./assets/nes/img/gui/numbers.png", 2);
    this.player2VirusCount.setNumber(0);
    this.player2VirusCount.position.x = 145;
    this.player2VirusCount.position.y = 46;
    this.addChild(this.player2VirusCount);

    // Player 1 virus count outline
    this.player1VirusCountOutline = PIXI.Sprite.from(
      "./assets/nes/img/gui/virus-count-outline.png"
    );
    this.player1VirusCountOutline.position.x = 138;
    this.player1VirusCountOutline.position.y = 15;
    this.addChild(this.player1VirusCountOutline);

    // Player 2 virus count outline
    this.player2VirusCountOutline = PIXI.Sprite.from(
      "./assets/nes/img/gui/virus-count-outline.png"
    );
    this.player2VirusCountOutline.position.x = 138;
    this.player2VirusCountOutline.position.y = 39;
    this.addChild(this.player2VirusCountOutline);
  }

  setFocused(focused) {
    this.focused = focused;
    this.heading.setValue(Number(focused))
  }

  get player1Value() {
    return this.slider.player1Value;
  }

  get player2Value() {
    return this.slider.player2Value;
  }

  setPlayer1Value(value) {
    value = Math.min(Math.max(value, 0), 20);
    this.slider.setPlayer1Value(value);
    this.player1VirusCount.setNumber(value);
  }

  setPlayer2Value(value) {
    value = Math.min(Math.max(value, 0), 20);
    this.slider.setPlayer2Value(value);
    this.player2VirusCount.setNumber(value);
  }
}
