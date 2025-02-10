import './App.css';
import Header from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import bg_1 from './assets/backgroundimage_1.jpeg';
import bg_2 from './assets/backgroundimage_2.jpeg';
import bg_3 from './assets/backgroundimage_3.jpeg';
import health from './assets/train.jpeg';
import pt from './assets/ptimage.jpeg';
import gx from './assets/yogaimage.jpeg';
import CardBox from './component/CardBox';
import ImageSlider from './component/ImageSlider';
import nautilus from './assets/nautilus.png';
import hammer from './assets/hammer.png';
import gym from './assets/gym80.png';
import cybex from './assets/cybex.png';
import panatta from './assets/panatta.png';



const images = [bg_1, bg_2, bg_3];

const tool_images = [nautilus, hammer, gym, cybex, panatta];

const cardData = [{
  title: "헬스(Health)",
  content: "헬스인에서는 이용자들의 강도 있는 운동을 위하여 최신 운동 장비들을 갖추었습니다. Hammer Strength, Rogue Fitness, Body-Solid 등 다양한 장비를 통해 최상의 운동환경을 조성하였습니다.",
  image: health // 이미지 URL을 필요에 맞게 변경
},
{
  title: "PT(Personal Training)",
  content: "전문기관에서 인정하는 최고의 트레이너가 체중감량 / 근육증가/ 재활 등 당신의 운동 목적에 맞춰 트레이닝 시켜드립니다.",
  image: pt // 이미지 URL을 필요에 맞게 변경
},
{
  title: "그룹 수업(GX/GPT)",
  content: "필라테스, 요가, 줌바 댄스 등 전문 강사진이 함께하는 무료 수업을 제공합니다. 함께 참여한 회원들과 유대를 통해 더욱 즐겁게 운동할 수 있습니다.",
  image: gx // 이미지 URL을 필요에 맞게 변경
}];

const App = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });

    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length; // 다음 이미지 인덱스
        return images[nextIndex];
      });
    }, 12000); // 12초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  return (
    <div className="App scroll">
        <Header />
        <div className='header-line'></div>
        <div className='front-image' style={{ backgroundImage: `url(${currentImage})` }}>
          <div className='image-text'>
            <h1 className='font-style'>HealthIn</h1>
            <h1 className='font-style'>With</h1>
            <h1 className='font-style'>Make your new Life</h1>
          </div>
        </div>

        <div>
          <h1 className='sub-title'>프 로 그 램</h1>
        </div>
        {/* 추가 섹션 */}
        {cardData.map((card, index) => (
          <CardBox 
            key={index} 
            title={card.title} 
            content={card.content} 
            image={card.image} 
            isEven={index % 2 !== 0} // 짝수 인덱스인지 여부를 전달
          />
        ))}

        <div className='image-slider-container'>
          <h1 className='sub-title'>보 유 머 신</h1>
          <ImageSlider tool_images={tool_images} />
        </div>

    </div>
  );
}

export default App;
