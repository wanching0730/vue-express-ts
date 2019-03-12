import { Router } from 'express';
import { SubscriberService } from '../services/subscriber.service';
import { SubscriberAddModel } from '../models/subsriber';

export const subscriberRouter = Router()
const subscriberService = new SubscriberService()

subscriberRouter.get('/subscribers', (req, res) => {

    const subscriber = subscriberService.get()

    return subscriber.then(subscriber => res.json(subscriber)).catch(err => err);
})

subscriberRouter.post('/subscribers', (req, res) => {

    const payload = req.body as SubscriberAddModel;
    const subscriber = subscriberService.create(payload)

    return subscriber.then(subscriber => res.json(subscriber)).catch(err => err);
})

subscriberRouter.put('/subscribers/:id', (req, res) => {
    const subscriberId = req.params.id;
    const data = req.body as SubscriberAddModel;
    const subscriber = subscriberService.update(subscriberId,data);

    return subscriber.then(subscriber => res.json(subscriber)).catch(err => err);
})

subscriberRouter.delete('/subscribers/:id', (req, res) => {
    const subscriberId = req.params.id;
    const subscriber = subscriberService.delete(subscriberId);

    return subscriber.then(subscriber => res.json(subscriber)).catch(err => err);
})
