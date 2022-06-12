import styled from "@emotion/styled";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 25px;
  margin-top: 6%;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.h3`
  font-family: "Lexend Deca";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--text);

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const OutlineIcon = styled(OutlineHeartIcon)`
  width: 28px;
  height: 28px;
  color: var(--purple);
  transition: transform ease-in 0.05s;
  :active {
    transform: scale(1.5);
  }
`;

export const SolidIcon = styled(SolidHeartIcon)`
  width: 28px;
  height: 28px;
  color: var(--purple);
  transition: transform ease-in 0.05s;
  :active {
    transform: scale(1.5);
  }
`;

export const Title = styled.h1`
  font-family: "Lexend Deca";
  font-size: 26px;
  font-weight: 400;
  text-align: justify;
  line-height: 32.5px;
  color: var(--title);
  margin-top: 22px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const Body = styled.p`
  font-family: "Lexend Deca";
  font-size: 18px;
  font-weight: 400;
  text-align: justify;
  line-height: 32px;
  color: var(--text);
  margin-top: 8px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
