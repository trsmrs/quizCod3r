import QuestionModel from "@/model/question"
import style from '@/styles/Question.module.css'
import Statement from "./Statement"
import Answer from "./Answer"
import Timer from "./Timer"

const letters = [
  {value: 'A', color: '#F2C866'},
  {value: 'B', color: '#F266BA'},
  {value: 'C', color: '#85D4F2'},
  {value: 'D', color: '#BCE596'},
]

interface QuestionProps {
  value: QuestionModel
  timeToAnswer?: number
  onAnswer: (index: number) => void
  elaspedTime: () => void
}

export default function Question(props: QuestionProps) {
  const question = props.value

  function answerRendering() {
    return question.answers.map((res, i) => {
      return <Answer
            key={`${question.id}-${i}`}
            value={res}
            index={i}
            letter={letters[i].value}
            letterBgColor={letters[i].color}
            onAnswer={props.onAnswer}
      />
    })
  }

  return (
    <div className={style.question}
     
    >
      <Statement text={question.statement} />
      <Timer key={question.id} duration={props.timeToAnswer ?? 10} 
      elaspedTime={props.elaspedTime}
       
      />
      {answerRendering()}
    </div>
  )
}