import React from 'react'
import '../../styles/testimonials.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import UniHeader from '../small components/UniHeader';
export default function Testimonials() {
    return (
        <div className="owlContainer">
            <UniHeader>Testimonials</UniHeader>
        <OwlCarousel className='owl-theme' items={1}  loop margin={0}>
            
            <div className="oitem">
                <h5>Avneet Kaur, SIT 2019</h5>
                <h6>KIIT School of Electronics</h6>
                <hr/>
                <p>
                <span style={{display:'inline-block',alignSelf:'start',paddingRight:'1vw'}}><img style={{width:'50px',height:'50px'}} src="./images/logos/quotation.png" alt="..."/></span>
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
            </div>
            <div className="oitem">
                <h5>Samruddhi Patil</h5>
                <h6>Fr. Conceicao Rodrigues Institute of Technology</h6>
                <hr/>
                <p>
                <span style={{display:'inline-block',alignSelf:'start',paddingRight:'1vw'}}><img style={{width:'50px',height:'50px'}} src="./images/logos/quotation.png" alt="..."/></span>
              This was my first year in eduvance. 
              The design of course was so encouraging that it almost took away my fear for programming. 
              It was the best start for me towards programming and application of micro-controllers. 
              The projects involved in the course and the two tests conducted made the summer vacation a great learning experience through fun. 
              I thank Jonathan sir, Ganesh sir and Gopal sir for guiding us about interviews, post graduation courses, new ideas and projects that helped me to develop myself. 
              The report submission, extra credit projects taught the time management. 
              The teaching assistants Dilip, Nimish and Abhisha never left any doubt unsolved and the help was provided so quickly that I could learn things faster and better.
              I really enjoyed learning something new and i will definitely try to work upon it more.
              
                </p>
            </div>
            <div className="oitem">
                <h5>Nimish Nitin Gujarathi</h5>
                <h6>State University of New York at Buffalo</h6>
               
                <hr/>
                <p>
                <span style={{display:'inline-block',alignSelf:'start',paddingRight:'1vw'}}><img style={{width:'50px',height:'50px'}} src="./images/logos/quotation.png" alt="..."/></span>
                    To begin with, the biggest compliment I will give to this course is that I still havent and will not forget a single concept/procedure that was taught. 
              The instructors were highly encouraging and pushed us to think more and write denser/optimized code. 
              The hands-on projects and exams were challenging and made us gain deeper insight into Python and R Pi. 
              I thank Ganesh sir, Karan and Janhavi for training me such that I am able to take up advanced Python and R-Pi projects during my MS</p>
            </div>
            
            <div className="oitem">
                <h5>Sriram V.B.</h5>
                <h6>Fr.Conceicao Rodrigues Institute of Technology</h6>
                <hr/>
                <p>
                <span style={{display:'inline-block',alignSelf:'start',paddingRight:'1vw'}}><img style={{width:'50px',height:'50px'}} src="./images/logos/quotation.png" alt="..."/></span>
                    My time in the FPGA course was both challenging and enjoyable. 
                This course was very useful to me as I wanted to learn some basics related to VLSI. 
                This course offered much more than the basics with coding in Verilog HDL. 
                The teachers and TA’s were very helpful and readily available for help. 
                I would like to thank Eduvance for conducting this wonderful workshop. 
                Really enjoyed learning something new which I hope to apply in future.
                </p>
            </div>
        </OwlCarousel>
        </div>
    )
}
