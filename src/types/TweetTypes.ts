export type TweetJson = {
    id: string,
    content: string,
    type: 'normal' | 'reply',
    authorUsername: string,
    likes: string[],
    replies: TweetJson[]
}

export type UserJson = {
    id: string,
    name: string,
    username: string,
    email: string,
    tweets: TweetJson[],
    following: string[], 
    followers: string[]
}