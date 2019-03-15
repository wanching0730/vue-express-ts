import { Router, Request, Response } from 'express';
import { SubscriberService } from '../services/subscriber.service';
import { SubscriberAddModel } from '../models/subsriber';

export const subscriberRouter = Router()
const subscriberService = new SubscriberService()

subscriberRouter.get('/subscribers', (req: Request, res: Response) => {

    const subscriber = subscriberService.get()

    return subscriber.then(subscriber => res.json(subscriber)).catch(err => err);
})

subscriberRouter.post('/subscribers', (req: Request, res: Response) => {

    const payload = req.body as SubscriberAddModel;
    const subscriber = subscriberService.create(payload)

    return subscriber.then(subscriber => res.json(subscriber)).catch(err => {
        res.status(400);
        return res.json(err)
    });
})

subscriberRouter.put('/subscribers/:id', (req: Request, res: Response) => {
    const subscriberId = req.params.id;
    const data = req.body as SubscriberAddModel;
    const subscriber = subscriberService.update(subscriberId,data);

    return subscriber.then(subscriber => res.json(subscriber)).catch(err => err);
})

subscriberRouter.delete('/subscribers/:id', (req: Request, res: Response) => {
    const subscriberId = req.params.id;
    const subscriber = subscriberService.delete(subscriberId);

    return subscriber.then(subscriber => res.json(subscriber)).catch(err => err);
})
