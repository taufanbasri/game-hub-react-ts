import { useParams } from "react-router-dom";
import useDetailsGame from "../hooks/useDetailsGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExapandableText from "../components/ExapandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useDetailsGame(slug);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{data.name}</Heading>
        <ExapandableText>{data.description_raw}</ExapandableText>
        <GameAttributes game={data} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
