import { Flex, Heading, IconButton, Icon, Text, useColorMode, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import darkBg from '../../assets/bg-desktop-dark.jpg';
import lightBg from '../../assets/bg-desktop-light.jpg';
import lightMobileBg from '../../assets/bg-mobile-light.jpg';
import darkMobileBg from '../../assets/bg-mobile-dark.jpg';
import { TodoInput } from "../TodoInput";
import { TodoList } from "../TodoList";
import { FilterTodo } from "../FilterTodo";

export function TodoComponent() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('white', 'hsl(233, 14%, 35%)');

  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
    
  })

  return (
    <>
      <Flex 
        h='300px' 
        w='100%' 
        bgImage={!! !isMobile ? colorMode === 'light' ? lightBg : darkBg : colorMode === 'light' ? lightMobileBg: darkMobileBg} 
        position='absolute' 
        bgSize='cover' 
        bgPosition='center' 
      />

      <Flex direction='column' maxW='585px' mx='auto' position='relative' top='50' p='6'>
        <Flex justify='space-between' marginBottom='8'>
          <Heading fontSize='42px'>T O D O</Heading>
          <IconButton 
            aria-label={colorMode === 'dark' ? 'toggle light mode' : 'toggle dark mode'} 
            colorScheme='transparent' 
            icon={<Icon as={colorMode === 'light' ? BsMoonFill : BsSunFill} color='hsl(236, 33%, 92%)' fontSize='24' />} 
            size='lg'
            onClick={toggleColorMode}
          />
        </Flex>

        <TodoInput />
        <TodoList />
        
        <FilterTodo />
      </Flex>

      <Flex as='footer' mx='auto' maxW='585px' mt='20' mb='12' justify='center'>
        <Text color={color}>Drag and drop to reorder list</Text>
      </Flex>
    </>
  );
}