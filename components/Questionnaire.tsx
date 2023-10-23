import style from '@/styles/Questionnaire.module.css'
import QuestionModel from "@/model/question"
import Question from './Questions'
import Button from './Button'
import { useState, useEffect } from 'react'

interface QuestionnaireProps {
    question?: QuestionModel
    lastQuestion: boolean
    AnsweredQuestion: (question: QuestionModel) => void
    nextStep: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {
    const [temp, setTemp] = useState(7)

    function onAnsw(index: number) {
        if (props.question?.notRespondida) {
            props.AnsweredQuestion(props.question.answerWith(index))
        }
    }

    useEffect(() => {
        props.lastQuestion ? setTemp(4) : 7
    }, [props.lastQuestion])


    return (

        <div className={style.questionnaire}>
            {
                props.question ?
                    <Question
                        value={props.question}
                        timeToAnswer={temp}
                        onAnswer={onAnsw}
                        elaspedTime={props.nextStep}
                    />
                    : false
            }

            <Button onClick={props.nextStep}
                text={props.lastQuestion ? 'Finalizar' : 'Próxima'}
            />
        </div>
    )
}