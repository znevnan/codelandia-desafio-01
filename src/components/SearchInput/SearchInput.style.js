import styled from "@emotion/styled";
import { SearchIcon } from "@heroicons/react/outline";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 73px;
  color: var(--white);
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  width: 28px;
  height: 28px;
  margin-left: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 22px 0 22px 64px;
  background-color: rgba(255, 255, 255, 0.2);

  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: 0.1px;
  color: var(--white);

  border: transparent;
  border-radius: 5px;
  ::placeholder {
    color: var(--white);
    opacity: 0.5;
  }
  :focus {
    outline: none;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
