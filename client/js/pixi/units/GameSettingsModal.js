import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";
import { MenuSlider } from "../common/MenuSlider";
import { DisplayNumber } from "../common/DisplayNumber";
import { playSound } from "../../audio/playSound";
import { MenuSpriteSlider } from "../common/MenuSpriteSlider";

export class GameSettingsModal extends PIXI.Container {
  modalSprite;
  virusSlider;
  player1VirusCount;
  player1VirusCountOutline;
  player2VirusCount;
  player2VirusCountOutline;
  speedSlider;
  musicSlider;
  virusCountHeading;
  speedHeading;
  musicTypeHeading;
  modalTitleSprite;

  selectedSetting = 0;

  constructor() {
    super();

    // Modal sprites
    this.modalSprite = PIXI.Sprite.from("./assets/nes/img/gui-panels/menu.png");

    this.modalTitleSprite = PIXI.Sprite.from("./assets/nes/img/gui/menu-title.png");
    this.modalTitleSprite.position.x = 92;
    this.modalTitleSprite.position.y = 16;

    // Virus settings
    this.virusCountHeading = new MenuSpriteSlider([
      "./assets/nes/img/gui/menu-label-viruses.png",
      "./assets/nes/img/gui/menu-label-viruses-selected.png",
    ]);
    this.virusCountHeading.setValue(1);
    this.virusCountHeading.position.x = 18;
    this.virusCountHeading.position.y = 33;

    this.virusSlider = new MenuSlider(
      {
        sprite: "./assets/nes/img/gui/virus-scale.png",
        tickSize: 4,
        maxValue: 20,
      },
      "./assets/nes/img/gui/virus-selector-p1.png",
      "./assets/nes/img/gui/virus-selector-p2.png"
    );

    this.virusSlider.position.x = 66;
    this.virusSlider.position.y = 68;

    this.player1VirusCount = new DisplayNumber("./assets/nes/img/gui/numbers.png", 2);
    this.player1VirusCount.setNumber(0);
    this.player1VirusCount.position.x = 163;
    this.player1VirusCount.position.y = 55;

    this.player2VirusCount = new DisplayNumber("./assets/nes/img/gui/numbers.png", 2);
    this.player2VirusCount.setNumber(0);
    this.player2VirusCount.position.x = 163;
    this.player2VirusCount.position.y = 79;

    this.player1VirusCountOutline = PIXI.Sprite.from(
      "./assets/nes/img/gui/virus-count-outline.png"
    );
    this.player1VirusCountOutline.position.x = 156;
    this.player1VirusCountOutline.position.y = 48;

    this.player2VirusCountOutline = PIXI.Sprite.from(
      "./assets/nes/img/gui/virus-count-outline.png"
    );
    this.player2VirusCountOutline.position.x = 156;
    this.player2VirusCountOutline.position.y = 72;

    // Speed settings
    this.speedHeading = new MenuSpriteSlider([
      "./assets/nes/img/gui/menu-label-speed.png",
      "./assets/nes/img/gui/menu-label-speed-selected.png",
    ]);
    this.speedHeading.position.x = 18;
    this.speedHeading.position.y = 90;

    this.speedSlider = new MenuSlider(
      {
        sprite: "./assets/nes/img/gui/speed-scale.png",
        tickSize: 38,
        maxValue: 2,
      },
      "./assets/nes/img/gui/speed-selector-p1.png",
      "./assets/nes/img/gui/speed-selector-p2.png"
    );
    this.speedSlider.setPlayer1Value(1);
    this.speedSlider.setPlayer2Value(1);
    this.speedSlider.position.x = 67;
    this.speedSlider.position.y = 119;

    // Music settings
    this.musicTypeHeading = new MenuSpriteSlider([
      "./assets/nes/img/gui/menu-label-music.png",
      "./assets/nes/img/gui/menu-label-music-selected.png",
    ]);
    this.musicTypeHeading.position.x = 18;
    this.musicTypeHeading.position.y = 138;

    this.musicSlider = new MenuSpriteSlider([
      "./assets/nes/img/gui/music-fever.png",
      "./assets/nes/img/gui/music-chill.png",
      "./assets/nes/img/gui/music-off.png",
    ]);

    this.musicSlider.position.x = 38;
    this.musicSlider.position.y = 163;

    // Add everything to the menu
    this.addChild(this.modalSprite);
    this.addChild(this.virusSlider);
    this.addChild(this.player1VirusCount);
    this.addChild(this.player2VirusCount);
    this.addChild(this.player1VirusCountOutline);
    this.addChild(this.player2VirusCountOutline);
    this.addChild(this.speedSlider);
    this.addChild(this.musicSlider);
    this.addChild(this.virusCountHeading);
    this.addChild(this.speedHeading);
    this.addChild(this.musicTypeHeading);
    this.addChild(this.modalTitleSprite);

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        const oldSelectedSetting = this.selectedSetting;

        this.selectedSetting++;
        this.updateSelectedSetting();

        if (oldSelectedSetting !== this.selectedSetting) {
          playSound("./assets/nes/sfx/menu/select-leftright.wav")
        }
      } else if (e.key === "ArrowUp") {
        const oldSelectedSetting = this.selectedSetting;

        this.selectedSetting--;
        this.updateSelectedSetting();

        if (oldSelectedSetting !== this.selectedSetting) {
          playSound("./assets/nes/sfx/menu/select-leftright.wav")
        }
      } else if (e.key === "ArrowRight") {
        if (this.selectedSetting === 0) {
          this.virusSlider.setPlayer1Value(this.virusSlider.player1Value + 1)
          this.player1VirusCount.setNumber(this.virusSlider.player1Value);
        } else if (this.selectedSetting === 1) {
          this.speedSlider.setPlayer1Value(this.speedSlider.player1Value + 1)
        } else if (this.selectedSetting === 2) {
          this.musicSlider.setValue(this.musicSlider.value + 1)
        }
      } else if (e.key === "ArrowLeft") {
        if (this.selectedSetting === 0) {
          this.virusSlider.setPlayer1Value(this.virusSlider.player1Value - 1)
          this.player1VirusCount.setNumber(this.virusSlider.player1Value);
        } else if (this.selectedSetting === 1) {
          this.speedSlider.setPlayer1Value(this.speedSlider.player1Value - 1)
        } else if (this.selectedSetting === 2) {
          this.musicSlider.setValue(this.musicSlider.value - 1)
        }
      }
    })
  }

  updateSelectedSetting() {
    this.selectedSetting = Math.min(Math.max(this.selectedSetting, 0), 2);
    this.virusCountHeading.setValue(this.selectedSetting === 0);
    this.speedHeading.setValue(this.selectedSetting === 1);
    this.musicTypeHeading.setValue(this.selectedSetting === 2);
  }
}
