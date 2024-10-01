import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";
import { MenuVirusSlider } from "./MenuVirusSlider";
import { MenuSpeedSlider } from "./MenuSpeedSlider.js";
import { MenuMusicSlider } from "./MenuMusicSlider.js";

export class GameSettingsModal extends PIXI.Container {
  modalSprite;
  modalTitleSprite;
  virusSlider;
  speedSlider;
  musicSlider;
  selectedSlider = 0;

  constructor() {
    super();

    // Modal sprite
    this.modalSprite = PIXI.Sprite.from("./assets/nes/img/gui-panels/menu.png");

    // Modal title sprite
    this.modalTitleSprite = PIXI.Sprite.from("./assets/nes/img/gui/menu-title.png");
    this.modalTitleSprite.position.x = 92;
    this.modalTitleSprite.position.y = 16;

    // Virus slider
    this.virusSlider = new MenuVirusSlider();
    this.virusSlider.position.x = 18;
    this.virusSlider.position.y = 33;

    // Speed slider
    this.speedSlider = new MenuSpeedSlider();
    this.speedSlider.position.x = 18;
    this.speedSlider.position.y = 90;

    // Music slider
    this.musicSlider = new MenuMusicSlider();
    this.musicSlider.position.x = 18;
    this.musicSlider.position.y = 138;

    // Add the menu sprites
    this.addChild(this.modalSprite);
    this.addChild(this.modalTitleSprite);

    // Add the menu sliders
    this.addChild(this.virusSlider);
    this.addChild(this.speedSlider);
    this.addChild(this.musicSlider);

    // Update config
    this.setSelectedSlider(0);
  }

  set player1VirusLevel(value) {
    this.virusSlider.setPlayer1Value(value);
  }

  get player1VirusLevel() {
    this.virusSlider.player1Value;
  }

  set player1SpeedLevel(value) {
    this.speedSlider.setPlayer1Value(value);
  }

  get player1SpeedLevel() {
    this.speedSlider.player1Value;
  }

  set musicType(value) {
    this.musicSlider.setValue(value);
  }

  get musicType() {
    this.musicSlider.value;
  }

  set player2VirusLevel(value) {
    this.virusSlider.setPlayer2Value(value);
  }

  get player2VirusLevel() {
    this.virusSlider.player2Value;
  }

  set player2SpeedLevel(value) {
    this.speedSlider.setPlayer2Value(value);
  }

  get player2SpeedLevel() {
    this.speedSlider.player2Value;
  }

  setSelectedSlider(selectedSlider) {
    this.selectedSlider = Math.max(Math.min(selectedSlider, 2), 0);
    this.virusSlider.setFocused(this.selectedSlider === 0);
    this.speedSlider.setFocused(this.selectedSlider === 1);
    this.musicSlider.setFocused(this.selectedSlider === 2);
  }
}
