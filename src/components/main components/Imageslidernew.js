import React,{useEffect} from 'react';
var counter=1;
export default function Imageslidernew() {
  
  useEffect(() => {
    document.getElementById('radio'+counter).checked=true;
    document.getElementById('mbtn'+counter).style.background="#000";
     setInterval(() => {
      if(counter>4){
        counter=1;
      }
      document.getElementById('radio'+counter).checked=true;
      if(counter==1){
        document.getElementById('mbtn1').style.background="#000";
         document.getElementById('mbtn2').style.background="#fff";
         document.getElementById('mbtn3').style.background="#fff";
         document.getElementById('mbtn4').style.background="#fff";
      }else if(counter==2){
    document.getElementById('mbtn1').style.background="#fff";
    document.getElementById('mbtn2').style.background="#000";
    document.getElementById('mbtn3').style.background="#fff";
    document.getElementById('mbtn4').style.background="#fff";
      }else if(counter==3){
    document.getElementById('mbtn1').style.background="#fff";
    document.getElementById('mbtn2').style.background="#fff";
    document.getElementById('mbtn3').style.background="#000";
    document.getElementById('mbtn4').style.background="#fff";
      }else if(counter==4){
        
    document.getElementById('mbtn1').style.background="#fff";
    document.getElementById('mbtn2').style.background="#fff";
    document.getElementById('mbtn3').style.background="#fff";
    document.getElementById('mbtn4').style.background="#000";
      }
      counter++;
      console.log(counter)
     }, 10000);

  }, [])
  const check1=()=>{
     document.getElementById('mbtn1').style.background="#000";
      document.getElementById('mbtn2').style.background="#fff";
      document.getElementById('mbtn3').style.background="#fff";
      document.getElementById('mbtn4').style.background="#fff";
  }
  const check2=()=>{
    document.getElementById('mbtn1').style.background="#fff";
      document.getElementById('mbtn2').style.background="#000";
      document.getElementById('mbtn3').style.background="#fff";
      document.getElementById('mbtn4').style.background="#fff";
  }
  const check3=()=>{
    document.getElementById('mbtn1').style.background="#fff";
      document.getElementById('mbtn2').style.background="#fff";
      document.getElementById('mbtn3').style.background="#000";
      document.getElementById('mbtn4').style.background="#fff";
  }
  const check4=()=>{
    document.getElementById('mbtn1').style.background="#fff";
      document.getElementById('mbtn2').style.background="#fff";
      document.getElementById('mbtn3').style.background="#fff";
      document.getElementById('mbtn4').style.background="#000";
  }
    return (
      <div id="home" className="mbody">
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1"/>
          <input type="radio" name="radio-btn" id="radio2"/>
          <input type="radio" name="radio-btn" id="radio3"/>
          <input type="radio" name="radio-btn" id="radio4"/>
          <div className="slide first">
            <img src="/images/slider/slider1.jpg" alt=".."/>
            <div className="slidertitle">
            <h1>Eduvance</h1>
            <p>India's Premier Edtech and Skill Development Company in the K-12 and Higher Education Sector</p>
            
            </div>
          </div>
          <div className="slide">
            <img src="/images/slider/slider2.jpg" alt=""/>
            <div className="slidertitle">
            <h1>EnablAR</h1>
            <p>State of the art AR VR coding and development platform for students</p>
          
            </div>
            </div>
          <div className="slide">
            <img src="/images/slider/slider1.jpg" alt=""/>
            <div className="slidertitle">
            <h1>Drone Simulator </h1>
            <p>India's first drone simulator to teach physics behind drone using a gamified platform</p>
          
            </div>
            </div>
          <div className="slide">
            <img src="/images/slider/slider2.jpg" alt=""/>
            <div className="slidertitle">
            <h1>Entrepedia</h1>
            <p>Platform for students to learn fundamentals of entrepreneurship by simulating their ideas</p>
          
            </div>
            </div>
          {/* <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div> */}
        </div>
        <div className="navigation-manual navigation-auto">
          <label onClick={check1} for="radio1" id="mbtn1" className="manual-btn auto-btn1"></label>
          <label onClick={check2} for="radio2" id="mbtn2" className="manual-btn auto-btn2"></label>
          <label onClick={check3} for="radio3" id="mbtn3" className="manual-btn auto-btn3"></label>
          <label onClick={check4} for="radio4" id="mbtn4" className="manual-btn auto-btn4"></label>
        </div>
      </div>
      </div>
    )
}
