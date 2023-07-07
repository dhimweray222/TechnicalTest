const db = require('../models')
const { Task } = require('../models');

// 1. create task
class TaskController{
    static async addTask(req, res,next){
        try {
        const { title,deadline,description } = req.body;

            const task = await Task.findOrCreate({
                    where: {
                        title,
                        deadline,
                        description
                    },
                });
            res.status(200).json({data:task[0]})
        } catch (err) {
            next(err)
        }

    }

// 2. get all task
    static async getAllTask (req, res,next){
        try {
            let tasks = await Task.findAll()
            res.status(200).json({data:tasks})
        } catch (err) {
            next(err)
        }
    }
// 3. delete task
    static async deleteTask (req, res,next){

        const {id} = req.params
        try {
            let task = await Task.findOne({where:{id:id}})

            if(task){
                await Task.destroy({ where: { id: id }} )
                res.status(200).json({message: 'Task is deleted !'})
            }
            else{
                res.status(200).json({message:'Task not found'})
            }
        } catch (err) {
            next(err)
        }
    }
// 4. update task
    static async updateTask(req,res,next){
        try {
            const { title,deadline,description } = req.body;
            const { id } = req.params;
            let data = await Task.update(
                {
                    title,
                    deadline,
                    description
                },
                {
                    where: {
                        id,
                    },
                    plain: true
                }
            );
            if (data==1) {
                res.status(200).send({
                    message: 'Successfully Updated Task ',
                });
            } else {
                res.status(404).send({
                    message: 'Task Not Found',
                });
            }
        } catch (err) {
            next(err);
        }
    }
// 5. find one task
    static async findOneTask(req,res,next){
      try {
        const {id}=req.params
        const data = await Task.findOne({where:{id}})
        if(data){
          res.status(200).json({data})
        }
        else{
          res.status(404).json({message:'task not found'})
        }
      } catch (err) {
        next(err)
      }
    }
}




module.exports = TaskController
