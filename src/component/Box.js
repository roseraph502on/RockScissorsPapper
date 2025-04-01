import React from 'react'

// Box 컴포넌트 정의: props를 통해 부모 컴포넌트로부터 전달된 데이터를 사용
const Box = (props) => {
    // props를 콘솔에 출력하여 전달된 데이터를 확인
    console.log("props",props)
  return (
    <div className='box'>
        {/* 부모 컴포넌트로부터 전달받은 title을 표시 */}
        <h1>{props.title}</h1>
      <img className="item-img"
      // item이 존재할 경우 그 이미지 URL을 사용
      src={props.item && props.item.img}/>
      <h2>WIN</h2>
    </div>
  )
} 
export default Box

