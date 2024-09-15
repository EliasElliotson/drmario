import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";

export class DisplayNumber extends PIXI.Container {
  value = "0";
  digitCount;
  digitTextures = [];

  constructor(fontPath, digitCount = 2) {
    super();

    this.digitCount = digitCount;

    const numbersTexture = PIXI.Texture.from(fontPath);

    numbersTexture.baseTexture.on("loaded", () => {
      for (let digit = 0; digit < 10; digit++) {
        const digitTexture = new PIXI.Texture(
          numbersTexture.baseTexture,
          new PIXI.Rectangle(digit * 8, 0, 8, 8)
        );
        this.digitTextures.push(digitTexture);
      }
      this.updateDisplay();
    });
  }

  setNumber(num) {
    this.value = String(num).padStart(this.digitCount, "0");
    this.updateDisplay();
  }

  deleteChildren() {
    while (this.children[0]) {
      this.removeChild(this.children[0]);
    }
  }

  updateDisplay() {
    this.deleteChildren();

    for (let digitIndex = 0; digitIndex < this.digitCount; digitIndex++) {
      const digit = Number(this.value[digitIndex]);
      const digitSprite = new PIXI.Sprite(this.digitTextures[digit]);

      digitSprite.position.x = digitIndex * 8;

      this.addChild(digitSprite);
    }
  }
}
