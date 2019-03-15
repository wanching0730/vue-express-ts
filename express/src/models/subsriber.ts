import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize';

export interface SubscriberAddModel {
    subscriberId?: number
    name: string
    email: string
}

export interface SubscriberModel extends Sequelize.Model<SubscriberModel, SubscriberAddModel> {
    subscriberId: number
    name: string
    email: string
    createdAt?: string
    updatedAt?: string
}

export interface SubscriberViewModel {
    subscriberId: number
    name: string
    email: string
}

export const Subscriber = sequelize.define<SubscriberModel, SubscriberAddModel>('subscriber', {
    subscriberId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: {
                msg: "Email address must be valid"
            }
        }
    }
})