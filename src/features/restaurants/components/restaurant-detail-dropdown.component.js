import * as React from "react";
import { List } from "react-native-paper";

export const RestaurantDetailDropdown = ({ restaurant }) => {
  const [breakfestExpanded, setBreakfestExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);

  return (
    <>
      <List.Accordion
        title="Snídaně"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={breakfestExpanded}
        onPress={() => setBreakfestExpanded(!breakfestExpanded)}
      >
        <List.Item title="Snídaně 1" />
        <List.Item title="Snídaně 2" />
      </List.Accordion>

      <List.Accordion
        title="Obědy"
        left={(props) => <List.Icon {...props} icon="hamburger" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      >
        <List.Item title="Oběd 1" />
        <List.Item title="Oběd 2" />
      </List.Accordion>
      <List.Accordion
        title="Večeře"
        left={(props) => <List.Icon {...props} icon="food" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      >
        <List.Item title="Večeře 1" />
        <List.Item title="Večeře 2" />
      </List.Accordion>
      <List.Accordion
        title="Nápoje"
        left={(props) => <List.Icon {...props} icon="cup" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}
      >
        <List.Item title="Nápoj 1" />
        <List.Item title="Nápoj 2" />
      </List.Accordion>
    </>
  );
};
