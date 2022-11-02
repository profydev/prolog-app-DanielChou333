import styled from "styled-components";
import { Routes } from "@config/routes";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: gray;
  font-size: 16px
`;

const StyledLink = styled(Link)`
  color:white;
`;

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 32px;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const DashboardButton = styled.button`
  background: #7F56D9;
  width: 165px;
  height: 44px;
  border: 1px solid #7F56D9;
  padding: 0;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;       

`;

const IssuesPage = () => {
  return (
    <>
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <Navigation>
            <Link href={Routes.home}>Home</Link>
            <Link href={Routes.products}>Products</Link>
            <Link href={Routes.documentation}>Documentation</Link>
            <Link href={Routes.pricing}>Pricing</Link>
        </Navigation>
        <DashboardButton ><StyledLink href={Routes.projects} >Open Dashboard</StyledLink></DashboardButton>
      </Header>
      
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
    
    <section>
    </section>
    </>
  );
};

export default IssuesPage;
