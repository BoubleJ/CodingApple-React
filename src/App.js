import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
     
    </div>
  );
}

function App() {
  
 
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [modal, setModal] = useState(false)
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [title, setTitle] = useState(1)
  let [입력값, 입력값변경] = useState('')
   
    
  const today = new Date();

  let realtoday = today.toDateString();


  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
     


   


 

{글제목.map((a, i) => {
        return (
          <div className="list">
            <h4 onClick={()=>{
              setTitle(i)
            }}>{글제목[i]}<span onClick={(e)=>{
              e.stopPropagation()
              let copy = [...따봉];
              copy[i] = copy[i] + 1;
              따봉변경(copy);
            }}>👍</span>{따봉[i]}</h4>
           
            <p>2월 17일 발행</p>
            <button onClick={()=>{
              let deletetitle = [...글제목]
              deletetitle.splice(i,1)
              글제목변경(deletetitle)

            }}>삭제</button>
          </div>
        );
      })}
   
 
  

   
  


      <button onClick={ ()=>{ setModal(!modal) } }>모달띄우기</button>
<input onChange={(e)=>{
  입력값변경(e.target.value)
}}></input>
<button onClick={()=>{
  


  if (입력값 == '날짜') {
    let copytitle = [...글제목]
    copytitle.push(realtoday)
    글제목변경(copytitle)
  } else if (입력값 !='') {
    let copytitle = [...글제목]
    copytitle.push(입력값)
    글제목변경(copytitle)
  }
  
}}>제목추가</button>
     

{
  modal == true ? <Modal  title={title} 글제목={글제목}/> : null
}
      
          
   
    
    </div>
  );
}

export default App;