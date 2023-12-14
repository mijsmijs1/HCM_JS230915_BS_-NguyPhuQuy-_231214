import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const userModel = {
    create: async (data) => {
        try {
            let user = await prisma.users.create({
                data: {
                    ...data
                }
            })
            return {
                status: true,
                message: "Create OK!",
                data: user
            }
        } catch (err) {
            console.log('err', err);
            return {
                status: false,
                message: "Create Failed!",
                data: null
            }
        }
    },
    findAll: async () => {
        try {
            let data = await prisma.users.findMany()
            return {
                status: true,
                data,
                message: "Find All OK!"
            }
        } catch (err) {
            console.log('err', err);
            return {
                status: false,
                data: null,
                message: "Find All Failed!"
            }
        }

    },
    find: async (id) => {
        try {
            let data = await prisma.users.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return {
                status: true,
                data,
                message: "Find by Id OK!"
            }
        } catch (err) {
            console.log('err', err);
            return {
                status: false,
                data: null,
                message: "Find by Id Failed!"
            }
        }
    },
    update: async (id, userData) => {
        try {
            let data = await prisma.users.update({
                where: {
                    id: Number(id)
                },
                data: {
                    ...userData
                }
            })
            return {
                status: true,
                data,
                message: "Update OK!"
            }
        } catch (err) {
            console.log('err', err);
            return {
                status: false,
                data: null,
                message: "Update Failed!"
            }
        }
    },
    delete: async (id) => {
        try {
            let data = await prisma.users.delete({
                where: {
                    id: Number(id)
                }
            })
            return {
                status: true,
                data,
                message: "Delete OK!"
            }
        } catch (err) {
            console.log('err', err);
            return {
                status: false,
                data: null,
                message: "Delete Failed!"
            }
        }
    }
}