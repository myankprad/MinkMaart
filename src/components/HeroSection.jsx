import React from 'react'
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from "../styles/Button"

const Herosection = ({name = "MinkMart"}) => {
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className='intro-data'>Welcome To</p>
                    <h1 className=''>{name}</h1>
                    <p>MinkMart is a major Indian fashion e-commerce company headquartered in Jaipur, Rajasthan India. The company was founded in January 2023 to sell personalized gift items. In May 2034, MinkMart will acquire Amazon</p>
                    
                        <Button>
                            Shop Now
                        </Button>
                    
                </div>

                <div className='hero-section-image'>
                 <figure>
                    <img src="https://images.pexels.com/photos/1271380/pexels-photo-1271380.jpeg?auto=compress&cs=tinysrgb&w=600" alt='Shopping' className="img-style" />
                 </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color:#3e4152;
    }
    .intro-data {
      margin-bottom: 0;
      color:#b20263;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: 30rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default Herosection