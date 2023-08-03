export const validateSchema = (shema) => (req, res, next) => {
    try {
        shema.parse(req.boy);
        next();
    } catch (error) {
        return res.status(400).json({ error })
    }
}