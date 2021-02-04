import React, { useEffect } from 'react';
import MyPage from '../components/MyPage';

// ! reference
// import Item from '../components/Item';

function PageMyPage() {
  
  return (
    <div>
      <div>PageMyPage</div>
      <MyPage/>
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

export default PageMyPage;