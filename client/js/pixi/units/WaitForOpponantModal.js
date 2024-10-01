import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";
import { Modal } from "../common/Modal.js";

export class WaitForOpponantModal extends Modal {
  opponentText

  constructor() {
    super();

    // Add display text
    this.opponentText = PIXI.Sprite.from("./assets/nes/img/gui/waiting-for-opponent.png")
    this.addChild(this.opponentText);

    // Add positioning event listener
    this.opponentText.texture.baseTexture.on("loaded", () => {
      this.updateMessagePosition();
    })

    this.updateMessagePosition();
  }

  updateMessagePosition() {
    this.opponentText.position.x = ((this.width / this.scale.x) - this.opponentText.width) / 2;
    this.opponentText.position.y = ((this.height / this.scale.y) - this.opponentText.height) / 2;
  }
}
