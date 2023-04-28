import { Heading } from "@chakra-ui/react";
import useDetailsGenre from "../hooks/useDetailsGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useDetailsGenre(genreId);

  const heading = `${genre?.name || ""} Games`;

  return (
    <Heading as="h1" my={2} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
