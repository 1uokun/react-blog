import React from 'react';
import Swiper,{SwipeItem} from "./swipe2carousel";

export default function App() {
  return (
    <>
      <Swiper direction={'vertical'} style={{ height: '200px', }} loop autoplay>
        <SwipeItem style={{backgroundColor:'red'}}>Slide 1</SwipeItem>
        <SwipeItem style={{backgroundColor:'yellow'}}>Slide 2</SwipeItem>
        <SwipeItem style={{backgroundColor:'blue'}}>Slide 3</SwipeItem>
      </Swiper>
    </>
  )
}