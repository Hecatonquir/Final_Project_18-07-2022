import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import gif1 from "../Media/Loading.gif";

export default function Loader() {
  return (
    <Box>
      <Flex justifyContent='center' alignItems='center' flexDirection='column' minHeight='90vh'>
        <Image src={gif1} alt="gif loader" />
      </Flex>
    </Box>
  );
}
