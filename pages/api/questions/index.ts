import questions from '../questions/dbQuestions'
import { Randomize } from '@/functions/arrays'

export default (req: any, res: any) => {
    const ids = questions.map(question => question.id)
    res.status(200).json(Randomize(ids))
}
