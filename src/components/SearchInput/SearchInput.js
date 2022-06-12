import { useState } from "react";
import { Wrapper, Input, Icon } from "./SearchInput.style";

const SearchInput = () => {
  const [searchQuery, updateSearchQuery] = useState("");

  return (
    <div>
      <form>
        <Wrapper>
          <Icon />
          <Input
            id="searchQuery"
            type="text"
            value={searchQuery}
            placeholder="Pesquisar no blog"
            onChange={(e) => updateSearchQuery(e.target.value)}
          />
        </Wrapper>
      </form>
    </div>
  );
};

export default SearchInput;
