import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitterSquare, FaMediumM } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Connect = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <Icons >      
                    <Link data-aos="fade-left" data-aos-delay="320"
                        to = {{pathname:"https://github.com/RaveenaBhasin"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FaGithub className='icon' title='github'/>
                    </Link>
                    
                    
                    <Link data-aos="fade-right" data-aos-delay="325"
                        to = {{pathname: "https://www.linkedin.com/in/raveena-bhasin-15b9b6200/"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FaLinkedin className='icon' title='linkedin'/>
                    </Link>
                    
                
                    <Link data-aos="fade-left" data-aos-delay="330"
                        to = {{pathname:"raveenabhasin15@gmail.com"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer"> 
                            <FaEnvelope className='icon' title='email'/>  
                        </Link>
                    <Link data-aos="fade-right" data-aos-delay="335"
                        to = {{pathname:"https://twitter.com/RaveenaBhasin"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FaTwitterSquare className='icon' title='twitter'/>
                    </Link>
                    <Link data-aos="fade-right" data-aos-delay="335"
                        to = {{pathname:"https://raveenabhasin15.medium.com/"}}
                        target={"_blank"}
                        rel="noopener noreferrer">
                            <FaMediumM className='icon' title = 'medium'/>
                    </Link>
                </Icons>
        </>
    );
};


const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin: 2rem 4rem;
    .icon {
        font-size: 2.5rem;
        color: whitesmoke;
        margin: 1.2rem;
        &:hover {
        color: #3DC9A7;
        transition: all 0.7s ease;
        } 
    }
    
@media (max-width: 1502px){
    font-size: 1.2rem;
    margin-top: 5rem;
    } 
    
@media (max-width: 480px){
    font-size: 1.5rem;
    } 
`
export default Connect;