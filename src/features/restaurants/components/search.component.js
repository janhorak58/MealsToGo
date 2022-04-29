import React, { useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ setShowFavourites, showFavourites }) => {
  const { keyword, search } = React.useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        icon={showFavourites ? "heart" : "heart-outline"}
        onIconPress={setShowFavourites}
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
