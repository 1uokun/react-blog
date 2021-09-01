import React from 'react';
import { Swiper } from 'swiper/swiper-react';
import SwiperClass from 'swiper/types/swiper-class';

export interface SwipeProps extends Omit<Swiper, 'onChange' | 'autoplay'> {
  // vertical?: boolean;
  // duration?: number;
  // initialSwipe?: number;
  // /** 是否显示指示器	 */
  // showIndicators?: boolean;
  // onChange?: (index: number) => void;
  children: any;
  // autoplay?: any;
}

export type SwipeInstance = SwiperClass;