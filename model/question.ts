import AnswersModel from "./answer"
import { Randomize } from "@/functions/arrays"
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


    answerWith(index: number): QuestionModel {
        const acertou = this.#answers[index]?.correct
        const newAnswers = this.#answers.map((res, i) => {
            const selectedRes = index === i
            const mustReveal = selectedRes || res.correct
            return mustReveal ? res.revelar() : res
        })

        return new QuestionModel(this.id, this.statement, newAnswers, acertou)
    }


    randomizeAnswers(): QuestionModel {
        let randomizedAnswers = Randomize(this.#answers)
        return new QuestionModel(this.#id, this.#statement, randomizedAnswers, this.#acertou)
    }


    toObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            answers: this.#answers.map(res => res.toObject()),
            respondida: this.respondida,
            acertou: this.#acertou,
        }
    }


}

