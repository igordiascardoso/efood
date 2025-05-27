// components/Banner/styles.ts

import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const BannerContainer = styled.div`
  height: 280px;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`

export const BannerContent = styled.div`
  && {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 32px;
    color: ${theme.colors.white};
  }
`

export const RestaurantType = styled.span`
  font-size: 32px;
  font-weight: 100 !important;
  margin-top: 25px;
  font-family:system-ui !important;
  opacity: 60%;

`

export const RestaurantTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin-botton: 32px;
  width: 970px !important;
`
