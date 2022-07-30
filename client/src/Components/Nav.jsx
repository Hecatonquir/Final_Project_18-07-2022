import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Nav() {
  return (
    <>
      <Box bgGradient='linear(to-b, blue.700, green.500)'>
        <Link to="/">
        <Button margin={2} bg='#bfd6e5'>
            Back
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Nav;
