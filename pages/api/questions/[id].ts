import questions from '../questions/dbQuestions'

export default (req: any, res: any) => {
    const idSelect = +req.query.id

    const selectedQuestion = questions.filter(question => question.id === idSelect)
    if (selectedQuestion.length === 1) {
        const selectQuestion = selectedQuestion[0].randomizeAnswers()
        res.status(200).json(selectQuestion.toObject())
    } else {

        res.status(204).send()
    }

}