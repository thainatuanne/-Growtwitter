import { randomUUID } from 'crypto'
import { addTweet } from '../database/tweet'
import { User } from './User'
import { Like } from './Like'
import { TweetJson } from '../types/TweetTypes'

export class Tweet {
    private readonly _id: string
    private _likes: Like[] = []
    private _replies: Tweet[] = []

    constructor(
        private _content: string,
        private _type: 'normal' | 'reply',
        private _authorUsername: string //username do autor
    ) {
        if (_content.trim() === '' || _content.length > 280) {
            throw new Error(`O conteúdo do tweet não pode estar vazio ou ultrapassar 280 caracteres.`)
        }

        this._id = randomUUID()
        addTweet(this) //add tweet ao 'banco de dados'
    }

    get id(): string {
        return this._id
    }

    get content(): string {
        return this._content
    }

    get type(): 'normal' | 'reply' {
        return this._type;
    }

    get authorUsername(): string {
        return this._authorUsername //retorna o username do autor
    }

    get replies(): Tweet[] {
        return this._replies
    }

    get likes(): Like[] {
        return this._likes
    }

    //curtir tweet
    like(user: User) {
        const existingLike = this._likes.find(like => like.user === user)

        if (existingLike) {
            console.log(`@${user.username} já curtiu esse tweet.`)
            return
        }

        const like = new Like(user, this)
        this._likes.push(like)
        console.log(`@${user.username} curtiu esse tweet`)
    }

    //add resposta
    addReply(reply: Tweet) {
        this._replies.push(reply)
    }

    //exibir tweet
    display() {
        console.log(`@${this._authorUsername} : ${this._content}`)

        //curtidas
        if (this._likes.length === 1) {
            console.log(`[${this._likes[0].user.username} curtiu]`)
        } else if (this._likes.length > 1) {
            console.log(`[${this._likes[0].user.username} e mais ${this._likes.length - 1} curtiram]`)
        }

        //respostas
        if (this._replies.length > 0) {
            console.log(`Respostas:`)
            this._replies.forEach(reply => {
                console.log(`> @${reply.authorUsername} : ${reply.content}`)
            })
        }
    }

    toJson(): TweetJson {
        return {
            id: this._id,
            content: this._content,
            type: this._type,
            authorUsername: this._authorUsername,
            likes: this._likes.map(user => user.user.username),
            replies: this._replies.map(reply => reply.toJson())
        }
    }
}