import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import Link from 'next/link'

export const Nav = styled.nav`
    background: #000;
    height:80px;
    display:flex;
    justify-content:centre;
    align-items:center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index:10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer=styled.div`
    display:flex;
    justify-content: space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding: 0 24px;
    max-width: 1100px;
`;
export const NavLogo= styled (Link)`
    img {
        width: 25%;
        height: auto;
    }
    width: 40%;
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size: 1.5rem;
    display:flex;
    align-items:center;
    margin-left: 24px;
    font-weight:bold;
    text-decoration:none;
    font-family: Yeserva One, Montserrat;
`;

export const MobileIcon=styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display:block;
        position: absolute;
        top: 0;
        margin-top: 23px;
        margin-right: 15px;
        right: 0;
        transform: translate (-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#fff;
    }
`;

export const NavMenu=styled.ul `
    display:flex;
    align-items: center;
    list-style:none;
    text-align:center;
    margin-right:-22px;
    justify-content: center;
    @media screen and (max-width:768px) {
        display:none;
    }
`;

export const NavItem = styled.li `
    height:80px;
`;

export const NavLinks= styled(LinkS)`
    color: #fff;
    font-family: Yeserva One, Montserrat;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1.3rem;
    white-space:nowrap;
    height: 100%;
    cursor: pointer;
    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn= styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width:768px) {
        display: none;
    }
`

export const NavBtnLink = styled (Link) `
    border-radius: 50px;
    background: #E7DD3F;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: Yeserva One, Montserrat;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:#fff;
        color: #010606;
    }
`;