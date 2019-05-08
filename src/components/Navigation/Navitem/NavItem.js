import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    display:flex;
    height: 100%;
`;

const A = styled.a`
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--color-white);
    height: 100%;
    display:flex;
    align-items:center;
    text-transform: uppercase;
    padding: 1rem;
    border-bottom: 2px solid transparent;
    font-weight:700;
    transition: all 0.2s;
    letter-spacing: 2px;

    &:hover{
        border-bottom: 2px solid var(--color-white);
    }
`;


const NavItem = ({link, children}) => {
  return (
    <Li>
        <A href={link}>{children}</A>
    </Li>
  )
}

export default NavItem
