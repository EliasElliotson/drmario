import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/+esm";
import { LoopedAudio } from "./audio/LoopedAudio.js";
import { ClickForSoundScene } from './pixi/scenes/ClickForSound.js'

PIXI.BaseTexture.defaultOptions.scaleMode = 0;

const app = new PIXI.Application({ background: "#000000", resizeTo: window });
document.body.appendChild(app.view);

const gameSettingsModal = new ClickForSoundScene();
app.stage.addChild(gameSettingsModal);

let menuBgm = new LoopedAudio("./assets/nes/music/menu.mp3", 22088 / 44100, 867413 / 44100);

app.ticker.add((delta) => {});

document.addEventListener("click", () => {
  menuBgm.play();
});
