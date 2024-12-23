# GrowTwitter 🐦

Uma aplicação backend de rede social estilo Twitter, desenvolvida em **Node.js com TypeScript**, utilizando os conceitos de **Programação Orientada a Objetos (POO)**.

## 📌 Descrição do Projeto

O GrowTwitter permite o **cadastro de usuários**, a criação de **tweets**, e implementa um sistema de **seguidores**. Os usuários podem **curtir** e **responder** tweets, interagindo com outros usuários.  

## 🛠️ Funcionalidades Implementadas

- **Cadastro de usuários**  
- **Criação de tweets (normal e reply)**  
- **Seguir outros usuários**  
- **Curtir tweets**  
- **Responder tweets**  
- **Exibição de feed de tweets (usuário + seguidores)**  

## 🚀 Funcionalidades Detalhadas

### 📇 Usuários

- **Criação de usuários** com identificador único, nome, email, username e senha.  
- **Validação de usernames únicos** para evitar duplicidade.  
- **Seguidores** – Usuários podem seguir e deixar de seguir outros usuários.  
- **Visualização de seguidores** e da lista de pessoas seguidas.  

---

### 🐦 Tweets

- **Criação de tweets** com conteúdo limitado a **280 caracteres**.  
- **Validação** para impedir tweets vazios ou acima do limite de caracteres.  
- **Curtidas e replies** – Tweets podem ser curtidos ou respondidos por outros usuários.  
- **Respostas a tweets** são tratadas como tweets do tipo **"reply"**.  

---

### 🔁 Interações

- **Curtir tweets** de outros usuários.  
- **Responder tweets** com novos tweets (replies).  
- **Exibir feed de tweets** próprios e de usuários seguidos.  

## ⚙️ Tecnologias Utilizadas

- **TypeScript**  
- **Node.js**  
- **UUID (crypto)** – geração de identificadores únicos para usuários e tweets.  
