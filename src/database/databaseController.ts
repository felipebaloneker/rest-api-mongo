import { IUser, User } from "../models/User";

export async function get() {
    try {
        const user = await User.find({})

        return user
    }
    catch (err) {
        return err
    }
}

export async function getOne(email: string) {
    try {
        const user = await User.findOne({ email })

        return user
    }
    catch (err) {
        return err
    }
}

export async function include({ name, email, password }: IUser) {
    try {
        const user = await User.create({ name, email, password })

        return user
    }
    catch (err) {
        return err
    }
}

export async function exclude(email: string) {
    try {
        const user = await User.deleteOne({ email })

        return user
    }
    catch (err) {
        return err
    }

}
export async function alter(name: string, password: string) {
    try {
        const user = await User.updateOne({ name, password })

        return user
    } catch (error) {
        return error
    }
}