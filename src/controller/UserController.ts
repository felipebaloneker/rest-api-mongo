import { Request, Response } from "express";
import controllerDB from "../database/databaseController";

const controllerCode = {
    get: async (request: Request, response: Response) => {
        try {
            const user = await controllerDB.get()
            return response.send({ user })

        } catch (error) {
            return response.status(400).send({ error: "Error on list" })
        }
    },
    create: async (request: Request, response: Response) => {
        try {
            const { name, email, password } = request.body
            if (!name || !email || !password) {
                return response.status(400).send({ error: "Registration Failed" })
            }
            const isUserExist = await controllerDB.getOne(email)
            if (isUserExist) {
                return response.status(400).send("User already exist")
            }
            const user = await controllerDB.create({ name, email, password })
            return response.send({ user })
        }
        catch (err) {
            return response.status(400).send({ err: "Registration Failed" })
        }
    },

    update: async (request: Request, response: Response) => {
        try {
            const { email, name, password } = request.params
            const isUserExist = await controllerDB.getOne(email)
            if (isUserExist) {
                await controllerDB.update(name, password)
                const findNew = await controllerDB.getOne(email)
                return response.send({ findNew })
            }
        } catch (error) {
            return response.status(400).send({ error: "Error on update" })
        }
    },
    delete: async (request: Request, response: Response) => {
        try {
            const email = request.params.email
            const isUserExist = await controllerDB.getOne(email as string)
            if (!isUserExist) {
                return response.status(400).send({ error: "Error on Delete" });
            }
            const user = await controllerDB.delete(email)
            return response.send({ user })
        }
        catch (error) {
            return response.status(400).send({ error: "Delete Failed" })
        }
    }



}

export default controllerCode