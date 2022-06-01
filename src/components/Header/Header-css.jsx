import styled from "styled-components";

const HeaderNav = styled.header`
  width: 100%;
  background: rgba(71, 152, 254, 1);
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LogoTitle = styled.span`
  font-size: 20px;
  color: #fff;
`;

const LogoImage = styled.img`
  width: 40px;
`;

export { HeaderNav, Nav, LogoBox, LogoTitle, LogoImage };
