import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "../styles/Featured.css";
 
export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 100;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel id="carousel"
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div class="card" style={{background: '#EEE' }}>First card</div>
        <div class="card" style={{background: '#EEE' }}>Second card</div>
        <div class="card" style={{background: '#EEE' }}>Third card</div>
        <div class="card" style={{background: '#EEE' }}>Fourth card</div>
      </ItemsCarousel>
    </div>
  );
};