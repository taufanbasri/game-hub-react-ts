import { Grid, GridItem, Show } from "@chakra-ui/react";
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

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
};

export default Homepage;
