import React from 'react'

// Box 컴포넌트 정의: props를 통해 부모 컴포넌트로부터 전달된 데이터를 사용
const Box = (props) => {
    let result="";    
    if (props.title =="Computer" && props.result !="tie" && props.result!=""){
      result= props.result === "win" ? "lose": "win"
    }else result = props.result; 
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img"
      // item이 존재할 경우 그 이미지 URL을 사용
      src={props.item && props.item.img}/>
      <h2>{result!="" ? result:"Start!"}</h2>
    </div>
  )
} 
export default Box

