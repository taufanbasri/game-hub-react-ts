import { Heading } from "@chakra-ui/react";
import useDetailsGenre from "../hooks/useDetailsGenre";
import useGameQueryStore from "../store";
import useDetailsPlatform from "../hooks/useDetailsPlatform";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useDetailsGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useDetailsPlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" my={2} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
