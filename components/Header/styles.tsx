import styled from 'styled-components'
import { device } from '../../styles/devices'

export const HeaderWrapper = styled.header`
  @media ${device.mobileS} {
    border: 3px solid green;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 80vw;
  }
  @media ${device.tablet} {
    flex-direction: row-reverse;
    border: 1px solid red;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 16vw;
  height: 16vw;
`
export const TitleLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  @media ${device.mobileS} {
    text-align: center;
    margin: 0.4rem 0;
    h1 {
      margin: 0;
    }
  }
  @media ${device.tablet} {
    margin-top: 0;
  }
`
export const LinksContainer = styled.nav`
  @media ${device.mobileS} {
    display: flex;
    justify-content: space-around;
    p {
      margin: 0;
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    p {
      margin-bottom: 0.2rem;
    }
  }
`