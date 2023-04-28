import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const ExapandableText = ({ children }: { children: string }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}

      <Button
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
        ml={1}
        size="xs"
        fontWeight="bold"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExapandableText;
