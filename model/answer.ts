export default class AnswersModel {
    #value: string
    #correct: boolean
    #revealed: boolean

    constructor(value: string, correct: boolean, revealed = false) {
        this.#value = value
        this.#correct = correct
        this.#revealed = revealed
    }

    static right(value: string) {
        return new AnswersModel(value, true)
    }

    static wrong(value: string) {
        return new AnswersModel(value, false)
    }

    get value() {
        return this.#value
    }

    get correct() {
        return this.#correct
    }

    get revealed() {
        return this.#revealed
    }


    toObject() {
        return {
            value: this.#value,
            correct: this.#correct,
            revealed: this.#revealed
        }
    }


}

