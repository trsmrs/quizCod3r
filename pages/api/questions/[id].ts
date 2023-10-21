import questions from '../questions/dbQuestions'

export default (req: any, res: any) => {
    const idSelect = +req.query.id

    const selectedQuestion = questions.filter(question => question.id === idSelect)
    if (selectedQuestion.length === 1) {
        const selectQuestion = selectedQuestion[0].randomizeAnswers()
      const obj = selectQuestion.answerWith(0).toObject()
        res.status(200).json(obj)
    } else {

        res.status(204).send()
    }

}