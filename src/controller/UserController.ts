import { Request, Response } from "express";
import { User } from "../models/User";
import { get, getOne, include, alter, exclude } from "../database/databaseController"

export async function create(request: Request, response: Response) {
    try {
        const { name, email, password } = request.body
        if (!name || !email || !password) {
            return response.status(400).send({ error: "Registration Failed" })
        }
        const isUserExist = await getOne(email)
        if (isUserExist) {
            return response.status(400).send("User already exist")
        }
        const user = await include({ name, email, password })
        return response.send({ user })
    }
    catch (err) {
        return response.status(400).send({ err: "Registration Failed" })
    }
}

export async function erase(request: Request, response: Response) {
    try {
        const email = request.params.email
        const isUserExist = await getOne(email as string)
        if (!isUserExist) {
            return response.status(400).send({ error: "Error on Delete" });
        }
        const user = await exclude(email)
        return response.send({ user })
    }
    catch (error) {
        return response.status(400).send({ error: "Delete Failed" })
    }
}

export async function index(request: Request, response: Response) {
    const email = request.params.email
    try {
        const user = await get()
        return response.send({ user })

    } catch (error) {
        return response.status(400).send({ error: "Error on list" })
    }
}
export async function update(request: Request, response: Response) {
    try {
        const { email, name, password } = request.params
        const isUserExist = await getOne(email)
        if (isUserExist) {
            await alter(name, password)
            const findNew = await getOne(email)
            return response.send({ findNew })
        }
    } catch (error) {
        return response.status(400).send({ error: "Error on update" })
    }
}