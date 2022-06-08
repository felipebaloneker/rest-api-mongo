import { IUser, User } from "../models/User";

const controllerDB = {
    get: async () => {
        try {
            const user = await User.find({})

            return user
        }
        catch (err) {
            return err
        }
    },
    getOne: async (email: string) => {
        try {
            const user = await User.findOne({ email })

            return user
        }
        catch (err) {
            return err
        }
    },
    create: async ({ name, email, password }: IUser) => {
        try {
            const user = await User.create({ name, email, password })

            return user
        }
        catch (err) {
            return err
        }
    },

    delete: async (email: string) => {
        try {
            const user = await User.deleteOne({ email })

            return user
        }
        catch (err) {
            return err
        }

    },

    update: async (name: string, password: string) => {
        try {
            const user = await User.updateOne({ name, password })

            return user
        } catch (error) {
            return error
        }
    }
}

export default controllerDB