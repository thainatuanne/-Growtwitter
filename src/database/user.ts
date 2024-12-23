import { User } from '../models/User'

export const users: User[] = []

export function addUser(user: User) {
    const existingUser = users.find((u) => u.username === user.username)

    if (existingUser) {
        throw new Error(`Username @${user.username} já está em uso.`)
    }

    users.push(user)
    console.log(`Usuário @${user.username} adicionado com sucesso!`)
}

//estado atual do banco de dados
export function showUsers() {
    console.log('Estado atual do banco de dados:\n', users)
}

// filtrar tweets usuário
export function getUserByUsername(username: string): User | undefined {
    return users.find(user => user.username === username)
}