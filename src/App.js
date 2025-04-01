import { useState } from "react"; // React의 useState 훅 가져오기
import './App.css';
import Box from "./component/Box" // Box 컴포넌트 가져오기

//가위바위보 선택지 객체 : 각 선택지에 대한 이름과 이미지 URL을 정의
const choice = {
  rock:{
    name: "Rock",
    img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL2pvYjk1OS1lbGVtZW50LWItMDEzNl8yLmpwZw.jpg",
  },
  scissors:{
    name: "Scissors",
    img: "https://www.kindpng.com/picc/m/502-5025731_scissors-clipart-png-download-rock-paper-scissors-clipart.png",
  },
  paper:{
    name: "Paper",
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg",
  },
};
function App() {
  // 상태 변수: 사용자 선택을 저장하는 상태 변수를 선언
  const [userSelect,setUserSelect] = useState(null)
  
  //// 버튼 클릭 이벤트 핸들러
  const play=(userChoice) => {
    setUserSelect(choice[userChoice])
    console.log("선택됨", userChoice);
  };
  return (
    <div>
      <div className='main'>
      {/* 사용자 Box 컴포넌트 */}
      <Box title="You"item={userSelect}/>
      {/* 사용자 Box 컴포넌트 (현재는 null로 설정)*/}
      <Box title="Computer" item={null}/>
      </div>
      <div className='main'>
        {/* 버튼 클릭 시 play 함수 호출 (롤백 함수 사용) */}
        <button onClick={() => play("scissors")} >가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
    

  );
}

export default App;
