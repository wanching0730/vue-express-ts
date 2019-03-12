import { Subscriber, SubscriberAddModel } from '../models/subsriber';

export class SubscriberService {
    create({ name, email }: SubscriberAddModel) {
        return Subscriber.create({name, email}).then(
            subscriber => subscriber
        ).catch(function (err) {
            return err
          });
    }

    get() {
        return Subscriber.findAll().then(
            subscriber => subscriber
        ).catch(function (err) {
            return err
          });
    }

    update(id: number, { name, email }: SubscriberAddModel) {
        return Subscriber.update({ name, email }, {where: {subscriberId:id}}).then(
            count => count
        ).catch(function (err) {
            return err
          });
    }

    delete(id: number) {
        return Subscriber.destroy({where: {subscriberId:id}}).then(
            count => count
        ).catch(function (err) {
            return err
          });
    }
}



