import { useEffect, useState } from 'react';
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {

  const [slidePerview, setSlidePerview] = useState(2)


  const data = [
    { id: '1', image: 'https://i.pinimg.com/564x/cf/da/47/cfda47ff676eacb750a1f84c870fdc10.jpg', alt: 'bioma neve' },
    { id: '2', image: 'https://i.pinimg.com/564x/af/4e/55/af4e557ac5c451d20642deef9c675f09.jpg', alt: 'oceano' },
    { id: '3', image: 'https://i.pinimg.com/564x/5b/60/6a/5b606a856f2c8ed39dc72b6597562e68.jpg', alt: 'floresta tropical' },
    { id: '4', image: 'https://i.pinimg.com/564x/3d/84/21/3d842159ad286b8be5f2615fadad8ac3.jpg', alt: 'paisagem noturna' },
  ]


  useEffect(() => {


    function handleResize() {
      
      if(window.innerWidth < 920) {
        setSlidePerview(1)
      }

      else {
        setSlidePerview(2)
      }
    }


    handleResize();
    window.addEventListener('resize',handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  },[]);



  return (

    <div className='App'>
      <div className='container'>
        <h2>Slider com React Js</h2>

        <Swiper
        slidesPerView={slidePerview}
        pagination={{clickable: true}}
        navigation={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt={item.alt} className='slide-item' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default App
