import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from './Common.esm.js';

const SCALE_PROPERTY = '--scale-value'; // zmienna css, stąd 2 myślniki
const START_SCREEN_SETTINGS_BUTTON_ID = 'js-settings-button';
const START_SCREEN_GAME_BUTTON_ID = 'js-start-game';
const START_SCREEN_ID = 'js-start-screen'; // const START_SCRREEN_SELECTOR = '#js-start-screen'; <<< inny przykład poprawnego nazewnictwa

//klasa będzie ukrywac samą siebie
class MainMenu extends Common {

        constructor() {
            super(START_SCREEN_ID); //kiedy dziedziczymy po innej klasie, musimy wywołać jej konstruktor >>>>
            // >>> super() = Common.constructor(elementId)
            this.bindToGameElements();
            this.resizeGameWindow();
            window.addEventListener('resize',this.resizeGameWindow)
        }

        bindToGameElements() {
            //https://kursjs.pl/kurs/obiekty/obiekty-zaawansowane-this
            const gameStartButton = this.bindToElement(START_SCREEN_GAME_BUTTON_ID)
            const gameSettingsButton = this.bindToElement(START_SCREEN_SETTINGS_BUTTON_ID)
            
            //dzięki fcji strzałkowej "this jest brane z zewnątrz"
            // ALE tutaj: "this" nie odwoływałby się do obiektu globalnego a do aktualnie klikniętego elementu - w tym przypadku buttona. Dlatego poniższe przykłady można stosowac zamiennie
            gameStartButton.addEventListener('click', this.showLevelScreen);
            // gameStartButton.addEventListener('click', () => this.showLevelScreen());
            gameSettingsButton.addEventListener('click', () => this.showSettingsScreen());
        }

        showLevelScreen() {
            console.log('kliknięto nowa gra')
            // console.log(this)
        }

        showSettingsScreen() {
            console.log('kliknięto ustawienia')
        }

        resizeGameWindow() {
            const {innerWidth: width, innerHeight: height} = window;
            const scale = Math.min( width / 640, height / 480); // szuka idealnej powierzchni do przedstawienia gry; bierze pod uwagę obracanie telefonu (po to stosujemy centre w poprzednich klasach)
            // console.log(scale)
            document.documentElement.style.setProperty(SCALE_PROPERTY, scale);
        }
}

export const mainMenu = new MainMenu();