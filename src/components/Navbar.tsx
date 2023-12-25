import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/png-transparent-video-game-game-controllers-gaming-miscellaneous-game-logo-thumbnail.png'
import ColorModeSwitch from './ColorModeSwitch'
const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
          <Image src={logo} alt='logo' boxSize={'60px'}/> 
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default Navbar