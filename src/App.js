import { useState } from "react"; // React의 useState 훅 가져오기
import './App.css';
import Box from "./component/Box" // Box 컴포넌트 가져오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace,faHand,faHandBackFist} from '@fortawesome/free-solid-svg-icons';

//가위바위보 선택지 객체 : 각 선택지에 대한 이름과 이미지 URL을 정의
const choice = {
  rock:{
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/512/1867/1867572.png",
  },
  scissors:{
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/2168/2168956.png",
  },
  paper:{
    name: "Paper",
    img: "https://png.pngtree.com/png-clipart/20240416/original/pngtree-cute-notes-icon-png-image_14856200.png",
  },
};
const img = {
  default1: { 
    name: "Default1",
    img: "https://i.namu.wiki/i/f0cH4ggbrkBHYMHthSXCNCcp-F3CHc_9lZVqk9dx5DimnlPfDXSJjEg5V7RJ9plvu7jEgdDqy3dmA10J9acqpQ.webp",
  },
  default2: { 
    name: "Default2",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MjZfMjcg/MDAxNTk4NDQ5MTgzMzc0.QZGCQQrGkjHyNpzPPkWP5XSvQgVwtG8gNzeQmKS47Hsg.HmvbleGCZi0KbpacqOuLp8MF7Z_PvdDmpGqD3yY-GoMg.PNG.iam_510/Sanrio_Characters_Kuromi_Image016.png?type=w800",
  },
}
const defaultImg1 = img.default1
const defaultImg2 = img.default2

function App() {
  // 상태 변수: 사용자 선택을 저장하는 상태 변수를 선언
  const [userSelect,setUserSelect] = useState(defaultImg1)
  const [computerSelect,setComputerSelect] = useState(defaultImg2)
  const [result,setResult] = useState("")
  
  //// 버튼 클릭 이벤트 핸들러
  const play=(userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice); 
    judgement(choice[userChoice],computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
    console.log("결과:",result);
  }
  // 컴퓨터 값
  const randomChoice=()=>{
    // 가위바위보 배열
    let itemArray = Object.keys(choice);
    // 1의 자리만(랜덤 함수 x 배열 수)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    // 최종 컴퓨터 랜덤 값
    let final = itemArray[randomItem];
    return choice[final];
  }
  // 결과
  const judgement = (user,computer) => {
    if(user.name == computer.name){
      return "tie"
    }else if (user.name=="Rock")return computer.name=="Scissors"?"win":"lose"
    else if (user.name=="Scissors")return computer.name=="Paper"?"win":"lose"
    else if (user.name=="Paper")return computer.name=="Rock"?"win":"lose"
  };
  // const getComputerResult=(result)=>{
  //   if (result == "win"){ 
  //     return "lose" 
  //   }else if (result == "lose"){ 
  //     return "win"
  //   }else if (result == "tie"){
  //     return "tie"
  //   }
  // };
  return (
    <div id="wrap">
      <div className='main'>
      {/* 사용자 Box 컴포넌트 */}
      <Box title="You"item={userSelect} result={result}/>
      {/* 사용자 Box 컴포넌트 (현재는 null로 설정)*/}
      <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        {/* 버튼 클릭 시 play 함수 호출 (롤백 함수 사용) */}
        <button onClick={() => play("scissors")} >
        <FontAwesomeIcon icon={faHandPeace} size="2xl" color="palevioletred" /> 
        </button>
        <button onClick={() => play("rock")}>
        <FontAwesomeIcon icon={faHandBackFist} size="2xl" color="palevioletred" />
        </button>
        <button onClick={() => play("paper")}>
        <FontAwesomeIcon icon={faHand} size="2xl" color="palevioletred"/>
        </button>
      </div>
    </div>
    

  );
}

export default App;
