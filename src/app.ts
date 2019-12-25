import "phaser";
import { WelcomeScene } from "./welcomeScene";
import { GameScene } from "./gameScene";
import { ScoreScene } from "./scoreScene";
// reference to phasers types
type GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
    title: "Stafall",
    width: 800,
    height: 600,
    parent: "game",
    scene: [WelcomeScene, GameScene, ScoreScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    backgroundColor: "#003"
};

export class StarfallGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new StarfallGame(config);
}