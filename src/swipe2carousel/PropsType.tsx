import React from 'react';
import SwiperClass from 'swiper/types/swiper-class';
import { Swiper } from 'swiper/react';

export interface SwipeProps extends Swiper{
  selectedIndex?: number;
  dots?: boolean;
  dotClass?: string;
  dotActiveClass?: string;
  cellSpacing?: number;
  slideWidth?: string | number;
  swipeSpeed?: number;
  vertical?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  infinite?: boolean;
  initialSlideWidth?: number;
  afterChange?: (form: number, to:number) => void;
  beforeChange?: (form: number, to:number) => void;
}

export type SwipeInstance = SwiperClass;