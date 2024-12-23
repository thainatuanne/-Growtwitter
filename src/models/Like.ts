import { randomUUID } from 'crypto'
import { User } from './User'
import { Tweet } from './Tweet'

export class Like {
    private readonly _id: string

    constructor(
        private _user: User,
        private _tweet: Tweet
    ) 
    {
        this._id = randomUUID()
    }

    get id(): string {
        return this._id
    }

    get user(): User {
        return this._user
    }

    get tweet(): Tweet {
        return this._tweet
    }
}