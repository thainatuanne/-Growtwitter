import { User } from './models/User'
import { addUser, getUserByUsername, showUsers } from './database/user'

//criar usuários (usuários)
const user1 = new User('Thainá', 'thainatuanne', 'thainatuanne@gmail.com', '123456')
const user2 = new User('Jabel', 'jabeltiago', 'jabel@gmail.com', '654321')
const user3 = new User('Gilmar', 'gilmar', 'gilmar@gmail.com', '102030')

//adicionar usuários
addUser(user1)
addUser(user2)
addUser(user3)

//criar tweets 
const tweet1 = user1.sendTweet('Hello, World!')
const tweet2 = user2.sendTweet('Olá, mundo!')
const tweet3 = user3.sendTweet('Feliz Natal!')

//seguir outros usuários
user1.follow(user2)
user1.follow(user3)
user2.follow(user3)
user3.follow(user1)

//exibir seguidores
console.log(`\nLista de seguidores:\n`)
user1.showFollowers()
user2.showFollowers()
user3.showFollowers()

//exibir quem está seguindo
console.log(`\nLista de quem estão seguindo:\n`)
user1.showFollowing()
user2.showFollowing()
user3.showFollowing()

//curtindo tweets (likes)
user2.likeTweet(tweet1)
user3.likeTweet(tweet1)
user1.likeTweet(tweet2)

//visualizar feed de cada usuário
console.log(`\nFeed de usuários:\n`)
user1.showFeed()
user2.showFeed()
user3.showFeed()

//respondendo tweets (replies)
user3.replyTweet(tweet1, 'Boa Tarde')
user1.replyTweet(tweet2, 'Bem Vindo')
user2.replyTweet(tweet3, 'Ótimo 2025.')

tweet1.display()
tweet2.display()
tweet3.display()

//buscar usuário por username
const foundUser = getUserByUsername('thainatuanne')
if (foundUser) {
    console.log(`Usuário encontrado: @${foundUser.username}`)
} else {
    console.log('Usuário não encontrado')
}

//exibir estado do banco de dados
showUsers()