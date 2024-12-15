import styled from '@emotion/styled'

import { colors } from 'styles/colors'

export const CardWrapper = styled.div`
  width: 450px;
  height: 250px;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #4d4d4dc7;
  position: relative;
`

export const CardImage = styled.img`
  flex: 1;
  background-size: cover;
  background-position: center;
  height: 240px;
  width: 200px;
  padding: 5px 7px;
  border-radius: 15px;
  align-self: center;
  cursor: pointer;
`

export const CardContent = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.WHITE};
  overflow: hidden;
  gap: 10px;
`

export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${colors.WHITE};
  cursor: pointer;
  margin-right: 15px;
`

export const CardPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.WHITE};
`
export const CardCategory = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.WHITE};
`

export const CardDescription = styled.div`
  font-size: 16px;
  color: ${colors.WHITE};
  margin-bottom: auto;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  max-height: calc(1.5em * 4);
  display: block;
  word-break: break-word;
`
export const CardStatus = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.WHITE};
`

export const CardIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FavoriteIconConteiner = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`
