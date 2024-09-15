import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";

export class MenuSpriteSlider extends PIXI.Container {
  value = 0
  sprites = []

  constructor(sprites) {
    super();

    for (let sprite of sprites) {
      this.sprites.push(PIXI.Sprite.from(sprite))
    }

    this.updateChildren();
  }

  deleteChildren() {
    while (this.children[0]) {
      this.removeChild(this.children[0]);
    }
  }

  setValue(value) {
    value = Math.min(Math.max(value, 0), this.sprites.length - 1);
    this.value = value;
    this.updateChildren();
  }

  updateChildren() {
    this.deleteChildren();
    this.addChild(this.sprites[this.value])
  }
}
