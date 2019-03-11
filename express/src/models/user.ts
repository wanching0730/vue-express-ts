import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize';

export interface UserAddModel {
    userId?: number
    name: string
    email: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
    userId: number
    name: string
    email: string
    createdAt?: string
    updatedAt?: string
}

export interface UserViewModel {
    userId: number
    name: string
    email: string
}

export const User = sequelize.define<UserModel, UserAddModel>('user', {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
})