import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightArrow } from '../../Assets/RightArrow.svg';
import styles from './Carousel.module.css';

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setisEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setisEnd(swiper.isEnd);
        })
    },[isEnd,swiper,swiper.isEnd]);
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={()=>swiper.slideNext()} />

        }
    </div>
  );
};

export default CarouselRightNavigation;