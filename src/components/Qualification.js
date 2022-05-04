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
    color: whitesmoke;
    text-align: center;
    margin-bottom: 2em;
    margin-top: 2em;
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
    font-size: 1.7rem;
    color: #3d3f42;
    text-align: left;
    margin-bottom: 1em;
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

const PR = styled.p`
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
                        <H3>2020-2024</H3><pr>B.Tech in Computer Science <br/> Jabalpur Engineering College <br/> 9.18 CGPA</pr>
                    </div>
                </div>

                <div class="timeline-block timeline-block-left">
                    <div class="marker active"><i class="fa fa-check" aria-hidden="true"></i></div>
                    <div class="timeline-content">
                        <H3>2019-2020</H3><pr>95% PCM, <br/>Class 12 CBSE</pr>
                    </div>
                </div>

                <div class="timeline-block timeline-block-right active">
                    <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                    <div class="timeline-content">
                        <H3>2017-2018</H3><pr>97%, Class 10 CBSE</pr>
                        
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
                            <H3><b>Project Mentor and Maintainer</b></H3>
                            <H4><a href="https://swoc.scriptindia.org/#/">Script Winter of Code</a></H4>
                            <h4>Dec 2021 - Feb 2022</h4>
                            <pr>Mentored students on a Full Stack project and reviewed Pull Request's and Issues. Helped contributors by helping them start with open source contributions and improve the quality of code.</pr>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <H3><b>FrontEnd Developer</b></H3>
                        <H4><a href="https://codess.cafe/">Codess Cafe</a></H4>
                        <h4>Jan 2022</h4>
                        <pr>Worked in a team of 4 to revamp the website with a variety of different languages, platforms, frameworks such as JavaScript, React, GitHub Actions. <br/></pr>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <H3><b>Open Source Contributor</b></H3>
                        <H4><a href = "https://gssoc.girlscript.tech/">GirlScript Summer of Code</a></H4>
                        <h4>March 2021 - May 2021</h4>
                        <pr>Worked for 3 months on a web app MakesMathEasy and developed responsive and adaptive webapp. <br/>Learned the workflow of Github and how to collaborate on large codebases.</pr>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <H3><b>Technical Writer</b></H3>
                        <H4><a href = "https://medium.com/theleanprogrammer">The Lean Programmer</a></H4>
                        <pr>Actively collaborated with a team of reviewers to compose highly-detailed articles on DevOps topics. <br/>Published 3 technical articles with a focus on Python hacks and Cloud Computing.</pr>
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
                        <H3><b>Generation Google Scholar'22</b></H3><pr>Among Top 55 scholars in the Asia-Pacific region, out of a pool of 14,078 applicants and received a scholarship of $2500.<br/>Awarded on the basis of academic performance, excellence in tech, leadership and impact on the community.</pr>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <H3><b>Top Contributor GirlScript Summer of Code'21</b></H3><pr>Among Top 10 contributors from 2000+ active contributors with 100+ PRs merged in a single Project. <br/>Received <a href = "https://drive.google.com/file/d/1K6tNIGgeX6yV4dluKSuwudEBs2KajkQg/view">Letter of Recommendation</a></pr>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <H3>Won the Internal Hackathon round for Smart India Hackathon'22 and nominated for competing in the Nationals.</H3><pr></pr>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <H3>Came in Top 10 teams in SheHacks Hackathon'21 by IIIT Allahabad for Project Avsar</H3><pr></pr>
                        </div>
                    </div>
                    <div class="timeline-block timeline-block-right">
                        <div class="marker active"><i class="fa fa-check active" aria-hidden="true"></i></div>
                        <div class="timeline-content">
                        <H3>Solved 500+ Problems on <a href="https://leetcode.com/Raveena_Bhasin/">Leetcode</a> and <a href="https://auth.geeksforgeeks.org/user/raveenabhasin15/practice/">GeeksForGeeks</a></H3><pr></pr>
                        </div>
                    </div>
                </div>
            
            </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}


export default Qualification;