import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

import Header from './Components/Header'
import Section from './Components/Section'
import ListItems from './Components/ListItems'

function App() {
  const [count, setCount] = useState(0)

  const gameListData = [
    {
      url: 'https://www.twitch.tv/directory/game/League%20of%20Legends',
      imgHref: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg',
      alt: 'Imagem do jogo League of Legends'
    },


    {
      url: 'https://www.twitch.tv/directory/game/VALORANT',
      imgHref: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg',
      alt: 'Imagem do jogo Valoran'
    },


    {
      url: 'https://www.twitch.tv/directory/game/Minecraft',
      imgHref: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg',
      alt: 'Imagem do jogo Minecraft'
    },

    {
      url: 'https://www.twitch.tv/directory/game/Teamfight%20Tactics',
      imgHref: 'https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg',
      alt: 'Imagem do jogo TFT'
    }
  ]



  const streamerListData = [
    {
      url: '"https://www.twitch.tv/alanzoka',
      imgHref: 'https://i.pinimg.com/564x/56/c9/ca/56c9ca65b23712ec0eaa8450f07e5a28.jpg',
      alt: 'Imagem de Alanzoka'
    },

    {
      url: 'https://www.twitch.tv/cellbit',
      imgHref: 'https://i.pinimg.com/564x/d3/31/8c/d3318ceb29c741858ce0cbc5db11f66f.jpg',
      alt: 'Imagemd de Cellbit'
    },

    {
      url: 'https://www.youtube.com/@MrBeast',
      imgHref: 'https://i.pinimg.com/564x/6a/1d/99/6a1d996616a23a297d47fece8bc0bba1.jpg',
      alt: 'imagem do Mr Beast'
    },

    {
      url: 'https://www.youtube.com/@ayellol1',
      imgHref: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7hTWh8obVC-XMtZvY3VuCBpauWRbYAHPVg&s',
      alt: 'imagem do ayel'
    }
  ]


  const svgMediaData = [
    {
      url: 'https://www.twitch.tv/maykbrito',
      imgHref: './public/img/twitch.svg',
      alt: 'twitch do myke brito',
    },

    {
      url: '"https://www.twitter.com/maykbrito',
      imgHref: './public/img/twitter.svg',
      alt: 'twitter do myke brito',
    },

    {
      url: 'https://www.instagram.com/maykbrito',
      imgHref: './public/img/instagram.svg',
      alt: 'Intagram do myke brito',
    },

    {
      url: 'https://www.youtube.com/maykbrito',
      imgHref: './public/img/youtube.svg',
      alt: 'YouTube do myke brito',
    },

  ]


  return (

    <div className='App'>
      <Header />

      <main>
        <Section
          title='Meus Jogos'
          subTitle='Os games que eu mais curto jogar'
        >
          {gameListData.map(function (item) {
            return (
              <ListItems
                url={item.url}
                imgHref={item.imgHref}
                alt={item.alt}

              />
            )
          })}
        </Section>


        <Section
          title='Canais e Streamers'
          subTitle='Lista de canais e transmissões que não perco'
        >

          {streamerListData.map(function (item) {
            return (
              <ListItems
                url={item.url}
                imgHref={item.imgHref}
                alt={item.alt}
              />
            )
          })}

        </Section>



        <Section
          title='Minhas redes'
          subTitle='Se conecte comigo agora messmo'
        >

          {svgMediaData.map(function (item) {
            return (
              <ListItems
                url={item.url}
                imgHref={item.imgHref}
                alt={item.alt}

              />
            )
          })}

        </Section>


      </main>
    </div>
  )
}

export default App
