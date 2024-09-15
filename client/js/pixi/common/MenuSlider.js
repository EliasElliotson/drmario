import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";

export class MenuSlider extends PIXI.Container {
  slider;
  player1;
  player2;

  constructor(scaleSettings, player1SliderImg, player2SliderImg) {
    super();

    // Update the settings for the scale portion of the app
    if (scaleSettings) {
      this.slider = {
        sprite: PIXI.Sprite.from(scaleSettings.sprite),
        tickSize: scaleSettings.tickSize,
        maxValue: scaleSettings.maxValue
      }

      this.addChild(this.slider.sprite);
    }

    // Update the settings for the player 1 slider
    if (player1SliderImg) {
      this.player1 = {
        sliderSprite: PIXI.Sprite.from(player1SliderImg),
        value: 0
      }

      this.player1.sliderSprite.texture.baseTexture.on("loaded", () => {
        this.player1.sliderSprite.position.y = -this.player1.sliderSprite.texture.baseTexture.height;
      });

      this.addChild(this.player1.sliderSprite);
    }

    // Update the settings for the player 2 slider
    if (player2SliderImg) {
      this.player2 = {
        sliderSprite: PIXI.Sprite.from(player2SliderImg),
        value: 0
      }

      this.slider.sprite.texture.baseTexture.on("loaded", () => {
        this.player2.sliderSprite.position.y = this.slider.sprite.texture.baseTexture.height;
      });

      this.addChild(this.player2.sliderSprite);
    }
  }

  get player1Value() {
    return this.player1.value
  }

  get player2Value() {
    return this.player2.value
  }

  setPlayer1Value(value) {
    value = Math.min(Math.max(value, 0), this.slider.maxValue);
    this.player1.value = value;
    this.player1.sliderSprite.position.x = value * this.slider.tickSize;
  }

  setPlayer2Value(value) {
    value = Math.min(Math.max(value, 0), this.slider.maxValue);
    this.player2.value = value;
    this.player2.sliderSprite.position.x = value * this.slider.tickSize;
  }
}
