import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";

/**
 * A utility class to create fullscreen backgrounds from a tiled sprite
 */
export class TiledBackground extends PIXI.Container {
  tilingTexture;
  tilingSprite;
  tilesPerWidth = 16;

  /**
   * Creates a new tiled background instance
   * @constructor
   * @param {string} texturePath The path to the texture to be used as a background
   */
  constructor(img) {
    super();

    this.tilingTexture = PIXI.Texture.from(img);
    this.tilingSprite = new PIXI.TilingSprite(this.tilingTexture, window.innerWidth, window.innerHeight);

    this.tilingTexture.baseTexture.on("loaded", () => {
      this.updateDynamics();
    });

    window.addEventListener("resize", () => {
      this.updateDynamics();
    });

    this.addChild(this.tilingSprite);
  }

  /**
   * Updates the dynamic features of this sprite (including sizing and position)
   */
  updateDynamics() {
    // Update the size of the tiling sprite
    this.tilingSprite.width = window.innerWidth;
    this.tilingSprite.height = window.innerHeight;

    // Update the tile position
    this.tilingSprite.tilePosition.x = window.innerWidth / 2;
    this.tilingSprite.tilePosition.y = window.innerHeight / 2;

    // Update the tile scale
    let scale = window.innerWidth / this.tilesPerWidth / this.tilingTexture.baseTexture.width;

    this.tilingSprite.tileScale.x = scale;
    this.tilingSprite.tileScale.y = scale;
  }
}
