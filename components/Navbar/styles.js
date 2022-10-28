import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 800px) {
    flex-direction: column;
    background-color: #004637;
    position: fixed;
    height: 100%;
    width: 100%;

    z-index: 5;

    gap: 0px;
    top: 0px;
    right: 0px;

    right: ${(props) => (props.sidebar ? "0" : "-100%")};
    transition: 0.5s;

    a {
      margin-top: 150px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 30px;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 25px;
  transition: 0.3s;
  &:hover {
    color: #7ac943;
  }

  @media (min-width: 800px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 800px) {
    display: flex;
    path {
      &:hover {
        color: #7ac943;
        transition: 0.5s;
      }
    }
  }
`;

export const CloseSidebar = styled.div`
  font-size: 35px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;

  @media (max-width: 800px) {
    display: flex;
    path {
      &:hover {
        color: #7ac943;
        transition: 0.5s;
      }
    }
  }
`;

export const ContentTitle = styled.div`
  a {
    font-family: "Cascadia";
    font-size: 30px;
    cursor: pointer;
    span {
      color: #7ac943;
    }
    &:hover {
      color: #7ac943;
      span {
        color: #fff;
      }
    }
  }
`;
