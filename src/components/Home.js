import React from 'react'
import "./home.css"
import { useNavigate} from "react-router-dom";
function Home() {
    
  const navigateTo = useNavigate();
    const signout = () => {
        
         
            navigateTo("/quiz");
      };
  return (
    <div>
                <main>
        
        <div id="content">    
            <div id="content-text">
                <img class="logo" src="images/mark.png"  alt="img"/>
                <h1><span>Creative</span><br/> <u>Qu</u>izes</h1>
                <h2>Quiz website that allows user to test their knowledge in the field of web development, if you think you can get the maximum score by answering all the questions correctly then TAKE THE QUIZ!!</h2>
                <button onClick={signout}>Take Quiz</button>
                             
            </div>
            <img class="header-image" src="images/image-2.png" alt="a business man standing and smiling"/>
              
        </div>
    </main>
                
    </div>
  )
}

export default Home