import React, { useEffect } from "react";
import "../../styles/testimonialsnew.css";
import UniHeader from '../small components/UniHeader';
export default function Testimonialsnew() {
  useEffect(() => {
    const sliderElm = document.querySelector(".slider-container .mslider");
    const btnLeft = document.querySelector(".slider-container .btn-left");
    const btnRight = document.querySelector(".slider-container .btn-right");

    const numberSliderBoxs = sliderElm.children.length;
    let idxCurrentSlide = 0;

    // Functions:
    function moveSlider() {
      let leftMargin =
        (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
      sliderElm.style.marginLeft = -leftMargin + "px";
      console.log(sliderElm.clientWidth, leftMargin);
    }
    function moveLeft() {
      if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
      else idxCurrentSlide--;

      moveSlider();
    }
    function moveRight() {
      if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
      else idxCurrentSlide++;

      moveSlider();
    }

    // Event Listeners:
    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);
    window.addEventListener("resize", moveSlider);
  }, []);

  return (
    <div style={{background:'#F7F7F7'}}>
    <UniHeader>Testimonials</UniHeader>
    <div className="mynewbody">
      <div class="testimonials">

        <div class="slider-container">
          <div class="mslider">
            <div style={{width:'100%'}} class="slide-box">
              <p class="comment">
              I joined the Embedded Systems & IoT course in the SIT Program. 
              The main point I want to highlight about the course is that the concepts taught were so clear & to the point that I didn't need to refer to extra notes. 
              The course structure was designed completely as per the current industry standard & requirements. 
              I had a great overall experience as they taught from the scratch with daily assignments & projects. 
              Our trainers were well prepared with the content & left no stone unturned to clear all the possible doubts. 
              Within a few days in the course, I could establish my confidence in advanced coding. 
              Tests were conducted in intervals so I was able to continuously assess my knowledge. 
              And the final project given to us helped me understand the use of all the concepts. 
              In the end, I'm pretty much satisfied with my decision to join this course as it met all my expectations.
              
              </p>
              {/* <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" /> */}
              <h3 class="name">Avneet Kaur, SIT 2019</h3>
              <h4 class="job">KIIT School of Electronics</h4>
            </div>
            <div  style={{width:'100%'}} class="slide-box">
              <p class="comment">
                
              This was my first year in eduvance. 
              The design of course was so encouraging that it almost took away my fear for programming. 
              It was the best start for me towards programming and application of micro-controllers. 
              The projects involved in the course and the two tests conducted made the summer vacation a great learning experience through fun. 
              I thank Jonathan sir, Ganesh sir and Gopal sir for guiding us about interviews, post graduation courses, new ideas and projects that helped me to develop myself. 
              The report submission, extra credit projects taught the time management. 
              The teaching assistants Dilip, Nimish and Abhisha never left any doubt unsolved and the help was provided so quickly that I could learn things faster and better.
              I really enjoyed learning something new and i will definitely try to work upon it more.
              
              </p>
              {/* <img src="https://images.unsplash.com/photo-1627541718143-1adc1b582e62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bXVzbGltfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}
              <h3 class="name">Samruddhi Patil</h3>
              <h4 class="job">Fr. Conceicao Rodrigues Institute of Technology</h4>
            </div>
            <div style={{width:'100%',transform:'translateY(20%)'}} class="slide-box">
              <p class="comment">
                
              To begin with, the biggest compliment I will give to this course is that I still havent and will not forget a single concept/procedure that was taught. 
              The instructors were highly encouraging and pushed us to think more and write denser/optimized code. 
              The hands-on projects and exams were challenging and made us gain deeper insight into Python and R Pi. 
              I thank Ganesh sir, Karan and Janhavi for training me such that I am able to take up advanced Python and R-Pi projects during my MS
              
              </p>
              {/* <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}
              <h3 class="name">Nimish Nitin Gujarathi</h3>
              <h4 class="job">State University of New York at Buffalo</h4>
            </div>
            <div style={{width:'100%',transform:'translateY(20%)'}} class="slide-box">
              <p class="comment">
                
              My time in the FPGA course was both challenging and enjoyable. 
              This course was very useful to me as I wanted to learn some basics related to VLSI. 
              This course offered much more than the basics with coding in Verilog HDL. 
              The teachers and TAâ€™s were very helpful and readily available for help. 
              I would like to thank Eduvance for conducting this wonderful workshop. 
              Really enjoyed learning something new which I hope to apply in future.
              
              </p>
              {/* <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}
              <h3 class="name">Sriram V.B.</h3>
              <h4 class="job">Fr.Conceicao Rodrigues Institute of Technology</h4>
            </div>
          </div>

          <a href="#!" class="control-slider btn-left">
            <img
              style={{ width: "20px", transform: "translateY(50%)" }}
              src="./images/logos/left-arrow.png"
            />
          </a>
          <a href="#!" class="control-slider btn-right">
            <img
              style={{ width: "20px", transform: "translateY(50%)" }}
              src="./images/logos/right-arrow.png"
            />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
