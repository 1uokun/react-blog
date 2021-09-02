import { SwiperSlide } from 'swiper/react';
import Swipe from './Swipe';
import "swiper/swiper.min.css"

const SwipeNamespace = Object.assign(Swipe, { Item: SwiperSlide });

export { SwiperSlide as SwipeItem };

export default SwipeNamespace;