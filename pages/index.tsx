import Question from "@/components/Questions";
import AnswersModel from "@/model/answer";
import QuestionModel from "@/model/question";

export default function Home() {
  const question = new QuestionModel(1, 'Better Color?', [
    AnswersModel.wrong('Black'),
    AnswersModel.wrong('Pink'),
    AnswersModel.wrong('Blue'),
    AnswersModel.right('Purple'),
  ])

  return (

    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <Question value={question} />
    </div>
  )
}
