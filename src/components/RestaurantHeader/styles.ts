// components/RestaurantHeader/styles.ts
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Link } from 'react-router-dom'

type HeaderContentProps = {
  $background: string
}

export const HeaderContainer = styled.header<HeaderContentProps>`
  padding: 0;
  display: flex;
  justify-content: center;
  height: 186px;
  background-image: url(${props => props.$background});
  // background-repeat: no-repeat;
  background-position: center;
  
`

export const HeaderContent = styled.div`
  // max-width: 2048px;
  width: 100%;
  margin-top: -44px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  position: relative;
  top: 15px;
`

export const BackButton = styled(Link)`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
  transition: all 0.3s ease;
  


  &:hover {
    background-color: #fff;
    transform: translateY(-2px);
  }
`

export const LogoRestaurant = styled(Link)`
  img {
    height: auto;
    width: 125px;
    margin-bottom: auto;
    position:relative;
    left: 25px;
   
`

export const CartButton = styled.button`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 0px 0px !important;
  font-weight: bold;
  font-size: 15px;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  

  

  &:hover {
    background-color: #fff;
    transform: translateY(-2px);
  }
`

