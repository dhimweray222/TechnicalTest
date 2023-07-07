// import controllers list
const taskController = require('../controllers/taskController')

// validator
const {
    validateCreateTask,
    validateRespon,
} = require('../middlewares/validator');

// router
const router = require('express').Router()


// use routers
router.post('/', validateCreateTask(),validateRespon, taskController.addTask )
router.get('/', taskController.getAllTask )
router.delete('/:id', taskController.deleteTask )
router.put('/:id', validateCreateTask(), validateRespon, taskController.updateTask )
router.get('/:id', taskController.findOneTask )











module.exports = router
