import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Nav() {
  return (
    <>
      <Box bg="#222831">
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
