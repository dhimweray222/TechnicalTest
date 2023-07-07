const {
    body,
    check,
    validationResult,
    query,
    param,
} = require('express-validator');
const moment = require('moment');
const validateRespon = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    });
};

const validateCreateTask = () => {
    return [
        body('title').notEmpty().withMessage('Title is required'),
        body('deadline').notEmpty().isISO8601().toDate().withMessage('Deadline is required'),
        body('description').notEmpty().withMessage('Description is required'),
    ];
};


module.exports = {
    validateCreateTask,
    validateRespon,

};
