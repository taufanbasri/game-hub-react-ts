import { Grid, GridItem, Show } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
    >
      <Show above="lg">
        <GridItem>Aside</GridItem>
      </Show>

      <GridItem area="main">
        Main
      </GridItem>
    </Grid>
  );
};

export default Homepage;
