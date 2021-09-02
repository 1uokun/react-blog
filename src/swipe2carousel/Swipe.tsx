import React, {
    useRef,
    forwardRef,
    useImperativeHandle,
  } from 'react';
  
  import SwiperCore, { Pagination, Autoplay, Lazy } from 'swiper';
  
  import { Swiper } from 'swiper/react';
  
  import { SwipeProps, SwipeInstance } from './PropsType';
  
  /**
   * 暂时先支持这三种
   * 更多功能详见 https://swiperjs.com/demos
   * **/
  SwiperCore.use([Autoplay, Pagination, Lazy]);
  
  const Swipe = forwardRef<SwipeInstance, SwipeProps>((props, ref) => {
    const { children,  ...parseProsp } = parseOptions(props);
    const internalSwipeRef = useRef<any>();

    useImperativeHandle(ref, () => internalSwipeRef.current, [internalSwipeRef.current]);

    return (
      <Swiper
        onSwiper={(swiper) => {
          internalSwipeRef.current = swiper;
        }}
        {...parseProsp}
      >
        {children}
      </Swiper>
    );
  });
  
  // 将Carousel的props转化为Swiper的props
  function parseOptions(opts: SwipeProps) {
    const swipeProps:Swiper = {...opts}

    if('selectedIndex' in opts){
      swipeProps.initialSlide = opts.selectedIndex
    }

    /**
     * dots
     * **/
    if('dots' in opts){
      swipeProps.pagination = opts.dots
    }
    if('dotClass' in opts){
      if(!opts.dots){
        console.warn("Warning: [Carousel: `dots` must be {true} before using `dotClass`]")
      }else {
        swipeProps.pagination = {
          bulletClass:opts.dotClass
        }
      }
    }
    if('dotActiveClass' in opts){
      if(!opts.dots){
        console.warn("Warning: [Carousel: `dots` must be {true} before using `dotActiveClass`]")
      }else if(typeof swipeProps.pagination === 'object'){
        swipeProps.pagination = {...swipeProps.pagination, bulletActiveClass:opts.dotActiveClass}
      }else {
        swipeProps.pagination = {
          bulletClass:opts.dotClass
        }
      }
    }
    /**
     * 舍弃dotStyle，改用dotClass
     * 原因1: swipe不支持行内样式 
     * 原因2: 从性能角度来说，CSS 的 class 通常比行内样式更好
     * **/
    if('dotStyle' in opts){
      console.warn("Warning: [Carousel: `dotStyle` is not a valid prop, do you mean `dotClass`]")
    }
    if('dotActiveStyle' in opts){
      console.warn("Warning: [Carousel: `dotActiveStyle` is not a valid prop, do you mean `dotActiveClass`]")
    }

    if('vertical' in opts && opts.vertical){
      swipeProps.direction = 'vertical'
    }

    if('autoplayInterval' in opts){
      if(!opts.autoplay){
        console.warn("Warning: [Carousel: `autoplay` must be {true} before using `autoplayInterval`]")
      }else if(opts.autoplay){
        swipeProps.autoplay = {
          delay:opts.autoplayInterval
        }
      }
    }

    if('infinite' in opts){
      swipeProps.loop = opts.infinite
    }

    if('cellSpacing' in opts){
      swipeProps.spaceBetween = opts.cellSpacing
    }

    if('swipeSpeed' in opts){
      swipeProps.speed = opts.swipeSpeed;
    }

    if('afterChange' in opts){
      swipeProps.onSlideChangeTransitionEnd = (sw)=>{
        const idx = opts.infinite ? sw.realIndex : sw.activeIndex;
        opts.afterChange?.(sw.previousIndex,idx);
      }
    }
    if('beforeChange' in opts){
      swipeProps.onBeforeSlideChangeStart = (sw)=>{
        const idx = opts.infinite ? sw.realIndex : sw.activeIndex;
        opts.beforeChange?.(sw.previousIndex,idx);
      }
    }

    return swipeProps;
  }
  
  export default Swipe;