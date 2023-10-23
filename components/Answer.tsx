import AnswersModel from '@/model/answer'
import style from '@/styles/Answers.module.css'


interface AnswerProps {
    value: AnswersModel
    index: number
    letter: string
    letterBgColor: string
    onAnswer: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const res = props.value
    const revealedAnswer = res.revealed ? style.answerRevealed : ''
    return (
        <div className={style.answers}
            onClick={() => props.onAnswer(props.index)}
        >
            <div className={`${revealedAnswer} ${style.answerContent}`}>
            
                    <div className={style.front}>
                        <div className={style.letter}
                            style={{ backgroundColor: props.letterBgColor }}>
                            {props.letter}
                        </div>
                        <div className={style.value}>
                            {res.value}
                        </div>
                    </div>
                    <div className={style.back}>
                        {res.correct ? (
                            <div className={style.correct}>
                                <div>A resposta certa é :...</div>
                                <div className={style.value}>{res.value}</div>
                            </div>

                        ) : (

                            <div className={style.wrong}>
                                <div>A resposta está errada :...</div>
                                <div className={style.value}>{res.value}</div>
                            </div>
                        )}
                    </div>
               
            </div>
        </div>
    )
}