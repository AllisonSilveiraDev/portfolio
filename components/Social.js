import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

const SocialLinks = styled.a`
  font-size: 2.8rem;
  margin: 1.2rem;
  &:hover {
    transform: translateY(-10px);
    transition: 0.3s;
  }
`;

const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Social() {
  return (
    <LinksDiv>
      <SocialLinks
        href="https://www.linkedin.com/in/allison-silveira-andrade-b90891217/"
        target="_blank"
        alt="Linkedin"
      >
        <BsLinkedin />
      </SocialLinks>
      <SocialLinks
        href="https://github.com/AllisonSilveiraDev"
        target="_blank"
        alt="Linkedin"
      >
        <BsGithub />
      </SocialLinks>
      <SocialLinks
        href="https://wa.me/5551997311483"
        target="_blank"
        alt="Linkedin"
      >
        <BsWhatsapp />
      </SocialLinks>
    </LinksDiv>
  );
}
