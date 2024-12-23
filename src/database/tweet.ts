import { Tweet } from "../models/Tweet"

export const tweets: Tweet[] = []

export function addTweet(tweet: Tweet): void {
    tweets.push(tweet)
}

export function getTweetsByUser(username: string): Tweet[] {
    return tweets.filter(tweet => tweet.authorUsername === username) // filtrar tweets por usuário
}