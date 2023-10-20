import AnswersModel from "./answer"

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: AnswersModel[]
    #acertou: boolean

    constructor(id: number, statement: string, answers: AnswersModel[], acertou = false) {
        this.#id = id
        this.#statement = statement
        this.#answers = answers
        this.#acertou = acertou
    }


    get id() {
        return this.#id
    }

    get statement() {
        return this.#statement
    }

    get answers() {
        return this.#answers
    }

    get acertou() {
        return this.#acertou
    }

    get respondida() {
        for (let res of this.#answers) {
            if (res.revealed) return true
        }
        return false
    }



}

