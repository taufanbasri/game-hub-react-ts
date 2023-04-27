import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
