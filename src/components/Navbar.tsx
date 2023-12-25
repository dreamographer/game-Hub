import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/pngegg.png'
const Navbar = () => {
  return (
    <HStack>
          <Image src={logo} alt='logo' boxSize={'60px'}/> 
        <Text>NavBar</Text>
    </HStack>
  )
}

export default Navbar