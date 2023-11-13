// do każdej warstwy przypisujemy główny element
// przełączając okienka będziemy togglować klasy, podłączać się do elementów co będzie się powtarzać
// nie chcemy w każdej klasie przeszukiwać elementu

//Common nie ma instancji więc od razu exportujemy
//instancja: niektóre 'rzeczy' muszą być współdzielone pomiędzy wszystkie instancje, a klasa może czynić rolę takiego "pojemnika tematycznego"


export const HIDDEN_CLASS = 'hidden';
export const HIDDEN_SCREEN = false;
export const VISIBLE_SCREEN = true;

//później wywołamy metodę super() która poda nam elementId
//metoda super wywoła konstuktor dziedziczonej klasy (...extends Common...)

export class Common {
    constructor(elementId) {
        this.element = this.bindToElement(elementId)
    }

    bindToElement(elementToFindById) {
        const element = document.getElementById(elementToFindById);

        if(!element) {
            throw new Error(`Nie znaleziono elementu Id: ${elementToFindById}`)
        }

        return element;
    }

    changeVisibilityScreen(element, mode) {
        mode === VISIBLE_SCREEN
            ? element.classList.remove(HIDDEN_CLASS)
            : element.classList.add(HIDDEN_CLASS)
    }
}