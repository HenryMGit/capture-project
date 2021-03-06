//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styles
import {About, Description, Image} from '../styles'
import styled from 'styled-components';

//Test
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import{useScroll} from './useScroll';
import { fade } from '../animation';

const ServicesSection = () =>{
    const [element, controls] =useScroll();
    return(
        <Services variants={fade} ref={ element} animate={controls} initial="hidden">
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm icon" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money icon" />
                            <h3>Afforable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Cards>
            </Description>
            <Image>
                <img src={home2}  alt="home2 "/>
            </Image>
        </Services>
    );
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }

    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;

    .icon{
        display: flex;
        align-items: center;
    }

    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`;
export default ServicesSection;