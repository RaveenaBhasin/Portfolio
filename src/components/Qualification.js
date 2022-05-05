import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import "./timeline.css";


const H2 = styled.h2`
    font-weight: 900;
    font-size: 2.2rem;
    color: whitesmoke;
    text-align: center;
    margin-bottom: 2em;
    margin-top: 4em;
@media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 3.5rem;
    }  
`

const H3 = styled.h3`
    font-weight: 800;
    font-size: 1.5rem;
    color: #3d3f42;
    text-align: left;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    @media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 3rem;
    }
    @media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 1.5rem;
}  
`

const HI = styled.h2`
    font-size: 1rem;
    color: #3d3f42;
    text-align: left;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    @media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 3rem;
    }
    @media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 1.5rem;
}  `

const H4 = styled.h4`
    font-size: 1.1rem;
    font-weight: 400;
    color: #343a40;
    @media (max-width: 768px){
        font-size: 1.8rem;
    }
    @media (max-width: 480px){
        font-size: 1rem;
    }
`

const pr = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    color: #343a40;
    @media (max-width: 768px){
        font-size: 1.8rem;
    }
    @media (max-width: 480px){
        font-size: 1rem;
    }
`

const Qualification = () => {
  return (
    <div
      id="qualification"
    >
        <H2>Qualification</H2>
      
      <VerticalTimeline>
          <VerticalTimelineElement
            className="custom-line"
            contentStyle={{ background: '#fff', color: '#fff' }} 
            iconStyle={{ background: "#10c9a1", color: '#fff'}}>
            <H3>Education</H3>
            <div class="container">

                <div class="timeline-block timeline-block-right">
                    <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                    <div class="timeline-content">
                        <HI>2020-2024</HI><p>B.Tech in Computer Science <br/> Jabalpur Engineering College <br/> 9.18 CGPA</p>
                    </div>
                </div>

                <div class="timeline-block timeline-block-left">
                    <div class="marker active"><i class="fa fa-check" aria-hidden="true"></i></div>
                    <div class="timeline-content">
                        <HI>2019-2020</HI><p>95% PCM, <br/>Class 12 CBSE</p>
                    </div>
                </div>

                <div class="timeline-block timeline-block-right active">
                    <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                    <div class="timeline-content">
                        <HI>2017-2018</HI><p>97%, Class 10 CBSE</p>
                        
                    </div>
                </div>
            </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#fff' }} 
                iconStyle={{ background: "#10c9a1", color: '#fff'}}>
                <H3>Experience</H3>
                <div class="container">
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                            <HI>Project Mentor and Maintainer</HI>
                            <H4><a href="https://swoc.scriptindia.org/#/">Script Winter of Code</a></H4>
                            <h4>Dec 2021 - Feb 2022</h4>
                            <p>Mentored students on a Full Stack project and reviewed Pull Request's and Issues. Helped contributors by helping them start with open source contributions and improve the quality of code.</p>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <HI>FrontEnd Developer</HI>
                        <H4><a href="https://codess.cafe/">Codess Cafe</a></H4>
                        <h4>Jan 2022</h4>
                        <p>Worked in a team of 4 to revamp the website with a variety of different languages, platforms, frameworks such as JavaScript, React, GitHub Actions. <br/></p>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <HI>Open Source Contributor</HI>
                        <H4><a href = "https://gssoc.girlscript.tech/">GirlScript Summer of Code</a></H4>
                        <h4>March 2021 - May 2021</h4>
                        <p>Worked for 3 months on a web app MakesMathEasy and developed responsive and adaptive webapp. <br/>Learned the workflow of Github and how to collaborate on large codebases.</p>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <HI>Technical Writer</HI>
                        <H4><a href = "https://medium.com/theleanprogrammer">The Lean Programmer</a></H4>
                        <p>Actively collaborated with a team of reviewers to compose highly-detailed articles on DevOps topics. <br/>Published 3 technical articles with a focus on Python hacks and Cloud Computing.</p>
                        </div>
                    </div>
                </div>
            
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#fff' }} 
                iconStyle={{ background: "#10c9a1", color: '#fff'}}>
                <H3>Achievements</H3>
                <div class="container">
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <HI>Generation Google Scholar'22</HI><p>Among Top 55 scholars in the Asia-Pacific region, out of a pool of 14,078 applicants and received a scholarship of $2500.<br/>Awarded on the basis of academic performance, excellence in tech, leadership and impact on the community.</p>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <HI>Top Contributor GirlScript Summer of Code'21</HI><p>Among Top 10 contributors from 2000+ active contributors with 100+ PRs merged in a single Project. <br/>Received <a href = "https://drive.google.com/file/d/1K6tNIGgeX6yV4dluKSuwudEBs2KajkQg/view">Letter of Recommendation</a></p>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <h3 style={{color: "#3d3f42", fontSize: "1rem"}}>Won the Internal Hackathon round for Smart India Hackathon'22 under software edition and nominated for competing in the Nationals.</h3>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <h3 style={{color: "#3d3f42", fontSize: "1rem"}}>Came in Top 10 teams in SheHacks Hackathon'21 by IIIT Allahabad for Project Avsar</h3>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <h3 style={{color: "#3d3f42", fontSize: "1rem"}}>Solved 500+ Problems on <a href="https://leetcode.com/Raveena_Bhasin/">Leetcode</a> and <a href="https://auth.geeksforgeeks.org/user/raveenabhasin15/practice/">GeeksForGeeks</a></h3>
                        </div>
                    </div>
                </div>
            
            </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}


export default Qualification;
