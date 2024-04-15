import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Components/Header'
import Section from './Components/Section'
import ListItems from './Components/ListItems'


const gameListData = [

  {
    url: 'https://www.twitch.tv/directory/game/League%20of%20Legend',
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg',
    alt: 'Imagem do jogo League of Legends'
  },

  {
    url: 'https://www.twitch.tv/directory/game/VALORANT',
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg',
    alt: 'Imagem do jogo Valorant'
  },

  {
    url: 'https://www.twitch.tv/directory/game/Minecraft',
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg',
    alt: 'Imagem do jogo Minecraft'
  },

  {
    url: 'https://www.twitch.tv/directory/game/Teamfight%20Tactics',
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg',
    alt: 'Imagem do jogo TFT'
  }
]


const chanelListData = [

  {
    url: 'https://www.twitch.tv/maykbrito',
    imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png',
    alt: 'Imagem de Mayk Brito'
  },

  {
    url: 'https://www.twitch.tv/alanzoka',
    imageUrl: 'https://i.pinimg.com/564x/56/c9/ca/56c9ca65b23712ec0eaa8450f07e5a28.jpg',
    alt: 'Imagem de Alanzoka'
  },

  {
    url: 'https://www.twitch.tv/cellbit',
    imageUrl: 'https://i.pinimg.com/564x/2e/af/a2/2eafa2155e6b400ad1b35753fd23681c.jpg',
    alt: 'Imagem do Cellbit'
  },

  {
    url: 'https://www.twitch.tv/calango',
    imageUrl: 'https://i.pinimg.com/736x/d5/42/88/d542882069a387d92c1c3c1d929c34c3.jpg',
    alt: 'Imagem do Calango'
  }

]




function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='App'>

      <Header />

      <main>

        <Section
          title='Meus Jogos'
          subTitle='Os games que eu mais curto'
        >

          {gameListData.map(function (item) {
            return (
              <ListItems
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })}
        </Section>


        <Section
         className='channel-list'
          title='Canais e Streamers'
          subTitle='Os gamers que eu mais curto jogar'  
        >

          {chanelListData.map(function (item) {
            return (
              <ListItems
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })}

        </Section>


        <Section
        title='Minhas Redes'
        subTitle='Se conecte comigo agora messmo'
        >
        </Section>

      </main>
    </div>
  )
}

export default App
