import { randomUUID } from 'crypto'
import { Tweet } from './Tweet'
import { UserJson } from '../types/TweetTypes'

export class User {
    private readonly _id: string
    private _tweets: Tweet[] = []
    private _following: User[] = []
    private _followers: User[] = []

    constructor(
        private _name: string,
        private _username: string,
        private readonly _email: string,
        private _password: string
    ) {
        this._id = randomUUID()
    }

    get id(): string {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get username(): string {
        return this._username
    }

    get email(): string {
        return this._email
    }

    get password(): string {
        return this._password
    }

    get tweets(): Tweet[] {
        return this._tweets
    }

    // seguir usuario
    follow(user: User) {
        if (this._following.includes(user)) {
            console.log(`${this._username} já segue ${user.username}`)
            return
        }
        this._following.push(user)
        user._followers.push(this)
        console.log(`@${this._username} começou a seguir @${user.username}`)
    }

    // enviar tweet
    sendTweet(content: string): Tweet {
        const tweet = new Tweet(content, 'normal', this._username) // username como autor
        this._tweets.push(tweet)
        return tweet
    }

    //curtir tweet 
    likeTweet(tweet: Tweet) {
        tweet.like(this) // chama o metodo like do tweet
    }

    //add tweet
    replyTweet(tweet: Tweet, content: string) {
        const reply = new Tweet(content, 'reply', this._username) // username como autor - tweet como resposta
        tweet.addReply(reply)
    }

    //seguidores
    showFollowers() {
        console.log(`Seguidores de @${this.username}:`)
        this._followers.forEach(user => {
            console.log(`- @${user.username}`)
        })
    }

    //seguindo
    showFollowing() {
        console.log(`@${this._username} está seguindo:`)
        this._following.forEach(user => {
            console.log(`-@${user.username}`)
        })
    }

    //vizualizar feed
    showFeed() {
        console.log(`Feed de @${this._username}`)
        //próprios tweets
        this._tweets.forEach((tweet) => tweet.display())
        //tweets de quem segue
        this._following.forEach((user) => {
            user.tweets.forEach((tweet) => {
                tweet.display()
            })
        })
    }

    toJson(): UserJson {
        return {
            id: this._id,
            name: this._name,
            username: this._username,
            email: this._email,
            tweets: this._tweets.map(tweet => tweet.toJson()),
            following: this._following.map(user => user.username),
            followers: this._followers.map(user => user.username)
        }
    }
}