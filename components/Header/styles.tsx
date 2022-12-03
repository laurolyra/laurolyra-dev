import styled from 'styled-components';
import { device } from '../../styles/devices';

export const HeaderWrapper = styled.header`
  border: 3px solid green;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 2rem;
  padding: 0 2rem 0.4rem 2rem;
  h2 {
    margin: 0;
    text-align: center;
  }
  @media ${device.tablet} {
    flex-direction: row-reverse;
    border: 1px solid red;
  }
  h2 {
    text-align: left;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 8vw;
  height: 8vw;
`;
export const TitleLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  text-align: center;
  margin: 0.4rem 0;
  h1 {
    margin: 0;
  }
  @media ${device.tablet} {
    text-align: left;
    margin-top: 0;
    h1 {
      font-size: 40px;
    }
  }
`;
export const LinksContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  p {
    margin: 0;
  }
  a {
    max-width: fit-content;
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #0087ca;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    min-height: 10vh;
    justify-content: space-between;
    p {
      margin-bottom: 0.2rem;
    }
    a {
      font-size: 16px;
    }
  }
`;
