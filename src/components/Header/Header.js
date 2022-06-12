import SearchInput from "../SearchInput/SearchInput";
import { Container, Wrapper, Information, Title } from "./Header.style";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Information>
          <Title>Codelândia</Title>
          <Title>blog</Title>
        </Information>
        <SearchInput />
      </Wrapper>
    </Container>
  );
};

export default Header;
