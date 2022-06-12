import styled from "@emotion/styled";

export const Container = styled.header`
  background: var(--linear-gradient);
`;

export const Wrapper = styled.header`
  padding: 40px 8%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: "Lexend Deca";
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.5px;
  color: var(--white);

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;
