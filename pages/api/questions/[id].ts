export default (req: any, res: any) => {
    res.status(200).json({
        id: req.query,
        name: 'Pedro'
    })
}