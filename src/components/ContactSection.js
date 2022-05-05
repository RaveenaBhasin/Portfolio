import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
    AOS.init({
        duration: 1200,
    })

    return(
        <div id="contact">
        <H2>Want to connect?</H2>
        <H3>I'm currently looking for Internship opportunites or any Open Source Collaborations, my inbox is always open. <br/>Whether you have a question or would like to collab on a project!</H3>
    </div>
    )
}

const H2 = styled.h2 `
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 2rem;
    font-weight: 900;
    font-size: 2.5rem;
    color: whitesmoke;
    
@media (max-width: 768px){
        margin-top: 10vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        font-size: 3.5rem;
    }
`

const H3 = styled.h3 `
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-weight: 300;
    color: #f5f3f0;
    
@media (max-width: 768px){
        margin-top: 10vh;
        font-size: 2rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        font-size: 1.5rem;
    }
`

export default ContactSection;
