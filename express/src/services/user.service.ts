import { User, UserModel, UserAddModel, UserViewModel } from '../models/user';

export class UserService {
    create({ name, email }: UserAddModel) {
        return User.create({name, email}).then(
            user => user
        )
    }

    get() {
        return User.findAll().then(
            user => user
        )
    }

    update(id: number, { name, email }: UserAddModel) {
        return User.update({ name, email }, {where: {userId:id}}).then(
            count => count
        )
    }

    delete(id: number) {
        return User.destroy({where: {userId:id}}).then(
            count => count
        )
    }
}



