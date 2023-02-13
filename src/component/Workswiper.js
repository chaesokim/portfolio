import swiperDBlink from '../json/swiperinfo.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

const Worksswiper = () => {
    const swiperinfo = swiperDBlink.aboutme;
      return(
        <Swiper className='workSection'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop = {true} 
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => {  
          //슬라이드가 끝나고 실행
        }}
        onSwiper={(swiper) => console.log(swiper)}
         >
          {
            swiperinfo.map( ( item, index ) => {
                   return(
                    <SwiperSlide className={item.cls} key={'sw'+index}>
                      <div className="swipertextbox">
                        <div className="songmyung">{item.hashtagtitle}</div>
                        <div className="nanummyeongsub swiperdetail white-space-prewrap py-3">{item.hashtagdetail}</div>
                      </div>
                    </SwiperSlide>
                   )
              }
          )}
             
        </Swiper>
      )
  }
  
  export default Worksswiper;