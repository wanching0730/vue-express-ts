import { Router } from 'express';
import { UserService } from '../services/user.service';
import { UserAddModel } from '../models/user';

export const userRouter = Router()
const userService = new UserService()

userRouter.get('/users', (req, res) => {

    const user = userService.get()

    return user.then(user => res.json(user))
})

userRouter.post('/users', (req, res) => {

    const payload = req.body as UserAddModel;
    const user = userService.create(payload)

    return user.then(user => res.json(user))
})

userRouter.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const data = req.body as UserAddModel;
    const user = userService.update(userId,data);

    return user.then(user => res.json(user))
})

userRouter.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = userService.delete(userId);

    return user.then(user => res.json(user))
})
