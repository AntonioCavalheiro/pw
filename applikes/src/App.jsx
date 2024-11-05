import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidbar"
import styles from "./app.module.css"
import './global.css'

//informações dinamicas no site:
//author: {avatarUrl:"", nome: "", cargo: ""}
//dataPublicacao: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AntonioCavalheiro.png',
      nome:'Antonio Gabriel',
      cargo:'Aluno da Etec'
    },
    
    content:[
      {type: 'paragraph', content: 'Fala galera 👍!!!'},
      {type: 'paragraph', content: 'Amanhã teremos viagem a Bienal!!'},
      {type: 'link', content: 'eteccidadedolivro'}
    ],

    datePublicacao: new Date('2024/09/10 09:46:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/furlanrogerio.png',
      nome:'Rogério Furlan',
      cargo:'Professor da Etec'
    },

    content:[
      {type: 'paragraph', content: 'Fala galera 🙌!!!'},
      {type: 'paragraph', content: 'Eu vou a viagem para a Bienal'},
      {type: 'link', content: 'bienal'}
    ],

    datePublicacao: new Date('2024/05/11 09:46:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/Henryqui.png',
      nome:'Henryqui Gabriel',
      cargo:'Aluno da Etec'
    },

    content:[
      {type: 'paragraph', content: 'Fala galera ✌!!!'},
      {type: 'paragraph', content: 'AAAAAAAEEEEEEEEEEEEEE!!'},
      {type: 'link', content: 'boooooooraaaaaaaaaaaaaaa'}
    ],

    datePublicacao: new Date('2024/05/11 017:06:00')
  }
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          {posts.map(post=> {
            return(
              <Post
                author = {post.author}
                content = {post.content}
                dataPublicacao = {post.dataPublicacao}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
