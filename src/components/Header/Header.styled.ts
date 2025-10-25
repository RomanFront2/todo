import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Theme } from '../../models/theme'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  transition: background-color .2s;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;
`

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const HeaderToggle = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`
export const HeaderButton = styled.button<{ theme: Theme }>`
font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  border-radius: 10px;
  border: none;
  padding: 10px 10px;
  transition: background-color 0.4s;
  background-color: ${({ theme }) => theme.colors.button};
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;

  &.active {
  color: #ffffff33;
}
`