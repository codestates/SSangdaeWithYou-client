import React from 'react';
import MyPage from '../components/MyPage';

function PageMyPage({ userInfo, isKakao }) {
  
  return (
    <MyPage userInfo={userInfo} isKakao={isKakao} />
  )
}

export default PageMyPage;