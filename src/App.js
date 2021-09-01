import React from 'react';
import Swiper,{SwipeItem} from "./swiper2";

export default function App() {
  return (
    <>
      <Swiper vertical style={{ height: '200px' }} loop autoplay>
        <SwipeItem>Slide 1</SwipeItem>
        <SwipeItem>Slide 2</SwipeItem>
        <SwipeItem>Slide 3</SwipeItem>
        <SwipeItem>Slide 4</SwipeItem>
        <SwipeItem>Slide 5</SwipeItem>
        <SwipeItem>Slide 6</SwipeItem>
        <SwipeItem>Slide 7</SwipeItem>
        <SwipeItem>Slide 8</SwipeItem>
        <SwipeItem>Slide 9</SwipeItem>
      </Swiper>
    </>
  )
}