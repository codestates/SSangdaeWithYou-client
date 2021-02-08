import React from 'react';
import ListDetail from '../components/ListDetail';

// ! reference
// import Item from '../components/Item';

function PageListDetail() {
  
  return (
    <ListDetail/>
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

export default PageListDetail;