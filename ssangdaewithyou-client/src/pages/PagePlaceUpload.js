import React, { useEffect } from 'react';
import PlaceUpload from '../components/PlaceUpload';

// ! reference
// import Item from '../components/Item';

function PagePlaceUpload() {
  
  return (
    <div>
      <div>PagePlaceUpload</div>
      <PlaceUpload/>
    </div>
  )
}

// ! reference
// function ItemListContainer({ items, addToCart }) {
//   // const handleClick = () => { }

//   return (
//     <div id="item-list-container">
//       <div id="item-list-body">
//         <div id="item-list-title">쓸모없는 선물 모음</div>
//         {items.map((item, idx) => <Item item={item} key={idx} addToCart={addToCart} />)}
//       </div>
//     </div>
//   );
// }

export default PagePlaceUpload;