import React from 'react';
import Map from '../components/Map';
import List from '../components/List';
// ! reference
// import Item from '../components/Item';

function PageMain({ smokePlaces, handleExistingPlaceInfo }) {
  
  return (
    <div id="mapAndList">
      <Map smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} />
      <List smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} />
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

export default PageMain;