import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";

export class Modal extends PIXI.Container {
  modalSprite;
  modalTitleSprite;

  constructor(titleSprite) {
    super();

    // Modal sprite
    this.modalSprite = PIXI.Sprite.from("./assets/nes/img/gui-panels/menu.png");
    this.addChild(this.modalSprite);

    // Modal title sprite
    if (titleSprite) {
      this.modalTitleSprite = titleSprite;
      this.modalTitleSprite.position.y = 16;

      this.modalTitleSprite.texture.baseTexture.on("loaded", () => {
        this.modalTitleSprite.position.x = (216 - this.modalTitleSprite.texture.baseTexture.width) / 2;
      });
      this.addChild(this.modalTitleSprite);
    }

    // Resizer event listeners
    window.addEventListener("resize", () => {
      this.updateDynamics();
    });

    this.modalSprite.texture.baseTexture.on("loaded", () => {
      this.updateDynamics();
    });
  }

  updateDynamics() {
    const modalScale = Math.min(window.innerWidth / 256, window.innerHeight / 224);

    this.scale.x = modalScale;
    this.scale.y = modalScale;

    this.position.x = (window.innerWidth - this.width) / 2;
    this.position.y = (window.innerHeight - this.height) / 2;
  }
}
