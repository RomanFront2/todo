import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ListItemLink = styled(NavLink) <{ isDone: boolean }>`
  text-decoration: none;
  padding: 10px;
  color: ${({ isDone }) => (isDone ? "green" : "red")};
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
}
`