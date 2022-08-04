import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Nav() {
  return (
    <>
      <Box bgGradient="linear(to-r, #222831, #393E46)">
        <Link to="/">
          <Button
            margin={2}
            bg="#FD7014"
            color="#EEEEEE"
            _hover={{ bg: "#EEEEEE", color: "black" }}
          >
            Back
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Nav;
