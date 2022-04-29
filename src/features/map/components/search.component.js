import React, { useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: 35px;
  width: 100%;
  z-index: 100;
`;

export const Search = () => {
  const { keyword, search } = React.useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={"map"}
        placeholder="Najdi si Lokaci :-)"
        defaultValue={searchKeyword}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </SearchContainer>
  );
};
