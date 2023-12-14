import express from 'express';
const Router = express.Router();
import { userController } from '../controllers/user.controller';
Router.post('/users',userController.create)
Router.get('/users',userController.findAll)
Router.get('/users/:id',userController.find)
Router.patch('/users/:id',userController.update)
Router.delete('/users/:id',userController.delete)
export default Router;