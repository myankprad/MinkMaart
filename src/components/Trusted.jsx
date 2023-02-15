import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted by more than 1200+ companies</h3>
        <div className="brand-section-slider">
          <div className="slider">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
              alt="Tesla"
            />
          </div>
          <div className="slider">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
              alt="Meta"
            />
          </div>
          <div className="slider">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="Netflix"
            />
          </div>
          <div className="slider">
            <img
              src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg"
              alt="Google"
            />
          </div>
          <div className="slider">
            <img
              src="https://pwskills.com/images/PWSkills-main.png"
              alt="PW skills"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 6rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;
export default Trusted;
