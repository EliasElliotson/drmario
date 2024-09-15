import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";
import { TiledBackground } from "./pixi/common/TiledBackground.js";
import { LoopedAudio } from "./audio/LoopedAudio.js";
import { GameSettingsModal } from "./pixi/units/GameSettingsModal.js";

PIXI.BaseTexture.defaultOptions.scaleMode = 0;

const app = new PIXI.Application({ background: "#000000", resizeTo: window });
document.body.appendChild(app.view);

const bg = new TiledBackground("./assets/nes/img/bg/menu.png");
app.stage.addChild(bg);

const gameSettingsModal = new GameSettingsModal();
app.stage.addChild(gameSettingsModal);
gameSettingsModal.scale.x = 4;
gameSettingsModal.scale.y = 4;

let menuBgm = new LoopedAudio("./assets/nes/music/menu.mp3", 22088 / 44100, 867413 / 44100);

app.ticker.add((delta) => {});

document.addEventListener("click", () => {
  menuBgm.play();
});
