import QuestionModel from "./question"

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


    revelar() {
        return new AnswersModel(this.#value, this.#correct, true)
    }


    static createFromObject(obj: AnswersModel): AnswersModel {
        return new AnswersModel(obj.value, obj.correct, obj.revealed)
    }



    toObject() {
        return {
            value: this.#value,
            correct: this.#correct,
            revealed: this.#revealed
        }
    }


}

