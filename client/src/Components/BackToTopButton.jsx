import React, { useEffect, useState } from 'react'
import { Box, Button, Image } from '@chakra-ui/react';
import upArrows from '../Media/up-arrows.png'

function BackToTopButton() {
    const [backToTopButton, setbackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setbackToTopButton(true);
            } else {
                setbackToTopButton(false);
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <>
     {backToTopButton && (
        <Button width='50px' height='50px' fontSize='50px' position='fixed' bottom='50px' right='50px' bg='#FD7014' _hover={{bg:'#EEEEEE'}} onClick={scrollUp}>
           <Image src={upArrows} alt="Arrows" width={6}/>
        </Button>
    )}
    </>
  )
}

export default BackToTopButton