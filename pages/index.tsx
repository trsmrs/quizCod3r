import Questionnaire from "@/components/Questionnaire";
import QuestionModel from "@/model/question";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api"

export default function Home() {
  const router = useRouter()
  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  async function loadQuestionsIds() {
    const res = await fetch(`${BASE_URL}/questionnaire`)
    const questionsIds = await res.json()
    setQuestionsIds(questionsIds)

  }

  async function loadQuestion(idQuestion: number) {
    const res = await fetch(`${BASE_URL}/questions/${idQuestion}`)
    const json = await res.json()
    const newQuestion = QuestionModel.createFromObject(json)
    setQuestion(newQuestion)

  }

  useEffect(() => {
    loadQuestionsIds()
  }, [])


  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])

  function answerQuestion(question: QuestionModel) {
    setQuestion(question)
    const correct = question.acertou
    setCorrectAnswers(correctAnswers + (correct ? 1 : 0))
  }

  function nextQuestionId() {
    try {
      const nextIndex = questionsIds.indexOf(question!.id) + 1
      return questionsIds[nextIndex]

    } catch (err) {
      return err
    }


  }


  function goToNext() {
    const nextId = nextQuestionId()
    nextId ? goToNextQuestion(nextId) : finish()
  }


  function goToNextQuestion(nextId: number) {
    loadQuestion(nextId)
  }

  function finish() {
    router.push({
      pathname: '/results',
      query: {
        total: questionsIds.length,
        corrects: correctAnswers
      }
    })
  }

  return (

    question ?
      <Questionnaire
        question={question}
        lastQuestion={nextQuestionId() === undefined}
        AnsweredQuestion={answerQuestion}
        nextStep={goToNext}
      />
      : false



  )
}
