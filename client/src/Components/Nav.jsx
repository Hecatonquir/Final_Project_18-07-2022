import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Nav() {
  return (
    <>
      <Box bgGradient='linear(to-b, #a28748, #6c5727)'>
        <Link to="/">
        <Button margin={2} bg='#1a78b1'>
            Back
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Nav;
