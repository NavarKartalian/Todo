import { Flex, IconButton, Icon, Text, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { IoIosRadioButtonOff, IoIosCheckmark } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import { useHandleTodo } from "../../contexts/handleTodo";
import { FilterTodo } from "../FilterTodo";

export function TodoList() {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue('white', 'hsl(235, 24%, 19%)');
  const border = useColorModeValue('hsl(233, 11%, 84%)', 'hsl(233, 14%, 35%)');

  const { task, handleCompleteTask, handleDeleteTask, filter } = useHandleTodo();
  
  const activeTasks = task.filter(tasks => tasks.isComplete === false);
  const completedTasks = task.filter(tasks => tasks.isComplete === true);

  return (
    <Flex direction='column' boxShadow='2xl'>
      { filter === 'All' ?
          task.map(tasks => (
            <Flex 
              key={tasks.id} 
              direction='row' 
              align='center'
              bgColor={bg}
              paddingY='10px'
              paddingX='6'
              justify='space-between'
              w='100%'
              fontSize={['16', '18', '18', '18']}
              borderBottom='1px'
              borderColor={border}
              _first={{borderTopRadius:'md'}}
            >
              <Flex direction='row' align='center'>
                <IconButton 
                  aria-label='Completed' 
                  colorScheme='transparent' 
                  icon={
                    <Icon 
                      as={!! tasks.isComplete ? IoIosCheckmark : IoIosRadioButtonOff} 
                      bgGradient={!! tasks.isComplete ? "linear(to-br, hsl(192, 100%, 67%), hsl(280, 87%, 65%))" : 'none'}
                      color={
                        colorMode === 'light' ? tasks.isComplete ? 'white' 
                        : 'hsl(236, 9%, 61%)' : tasks.isComplete ? 'white'
                        : 'hsl(233, 14%, 35%)'
                      }
                      borderRadius='2xl'
                      fontSize='26'  
                    />
                  } 
                  size='sm'
                  onClick={() => handleCompleteTask(tasks.id)}
                />
                <Text 
                  ml='4' 
                  color={
                    colorMode === 'dark' ? tasks.isComplete ? 'hsl(233, 14%, 35%)' 
                    : 'hsl(234, 39%, 85%)' : tasks.isComplete ? 'hsl(236, 9%, 61%)'
                    : 'hsl(235, 19%, 35%)'
                  } 
                  textDecor={!! tasks.isComplete ? 'line-through' : 'none'}
                  onClick={() => handleCompleteTask(tasks.id)}
                  _hover={{cursor: 'pointer'}}
                >
                  {tasks.title}
                </Text>
              </Flex>

              <IconButton 
                aria-label='Delete' 
                icon={<Icon as={VscChromeClose} 
                color={colorMode === 'dark' ? 'hsl(233, 14%, 35%)' : 'hsl(236, 9%, 61%)'} fontSize='26' />} 
                bgColor='transparent'
                onClick={() => handleDeleteTask(tasks.id)}
                _hover={{bgColor: ''}}
              /> 
            </Flex>
          ))
          :
          (
            filter === 'Active' ?
              activeTasks.map(tasks => (
                <Flex 
                  key={tasks.id} 
                  direction='row' 
                  align='center'
                  bgColor={bg}
                  paddingY='10px'
                  paddingX='6'
                  justify='space-between'
                  w='100%'
                  fontSize='18'
                  borderBottom='1px'
                  borderColor={border}
                  _first={{borderTopRadius:'md'}}
                >
                  <Flex direction='row' align='center'>
                    <IconButton 
                      aria-label='Completed' 
                      colorScheme='transparent' 
                      icon={
                        <Icon 
                          as={!! tasks.isComplete ? IoIosCheckmark : IoIosRadioButtonOff} 
                          bgGradient={!! tasks.isComplete ? "linear(to-br, hsl(192, 100%, 67%), hsl(280, 87%, 65%))" : 'none'}
                          color={
                            colorMode === 'light' ? tasks.isComplete ? 'white' 
                            : 'hsl(236, 9%, 61%)' : tasks.isComplete ? 'white'
                            : 'hsl(233, 14%, 35%)'
                          }
                          borderRadius='2xl'
                          fontSize='26'  
                        />
                      } 
                      size='sm'
                      onClick={() => handleCompleteTask(tasks.id)}
                    />
                    <Text 
                      ml='4' 
                      color={
                        colorMode === 'dark' ? tasks.isComplete ? 'hsl(233, 14%, 35%)' 
                        : 'hsl(234, 39%, 85%)' : tasks.isComplete ? 'hsl(236, 9%, 61%)'
                        : 'hsl(235, 19%, 35%)'
                      } 
                      textDecor={!! tasks.isComplete ? 'line-through' : 'none'}
                      onClick={() => handleCompleteTask(tasks.id)}
                      _hover={{cursor: 'pointer'}}
                    >
                      {tasks.title}
                    </Text>
                  </Flex>

                  <IconButton 
                    aria-label='Delete' 
                    icon={<Icon as={VscChromeClose} 
                    color={colorMode === 'dark' ? 'hsl(233, 14%, 35%)' : 'hsl(236, 9%, 61%)'} fontSize='26' />} 
                    bgColor='transparent'
                    onClick={() => handleDeleteTask(tasks.id)}
                    _hover={{bgColor: ''}}
                  /> 
                </Flex>
              )) 
              :
                completedTasks.map(tasks => (
                  <Flex 
                    key={tasks.id} 
                    direction='row' 
                    align='center'
                    bgColor={bg}
                    paddingY='10px'
                    paddingX='6'
                    justify='space-between'
                    w='100%'
                    fontSize='18'
                    borderBottom='1px'
                    borderColor={border}
                    _first={{borderTopRadius:'md'}}
                  >
                    <Flex direction='row' align='center'>
                      <IconButton 
                        aria-label='Completed' 
                        colorScheme='transparent' 
                        icon={
                          <Icon 
                            as={!! tasks.isComplete ? IoIosCheckmark : IoIosRadioButtonOff} 
                            bgGradient={!! tasks.isComplete ? "linear(to-br, hsl(192, 100%, 67%), hsl(280, 87%, 65%))" : 'none'}
                            color={
                              colorMode === 'light' ? tasks.isComplete ? 'white' 
                              : 'hsl(236, 9%, 61%)' : tasks.isComplete ? 'white'
                              : 'hsl(233, 14%, 35%)'
                            }
                            borderRadius='2xl'
                            fontSize='26'  
                          />
                        } 
                        size='sm'
                        onClick={() => handleCompleteTask(tasks.id)}
                      />
                      <Text 
                        ml='4' 
                        color={
                          colorMode === 'dark' ? tasks.isComplete ? 'hsl(233, 14%, 35%)' 
                          : 'hsl(234, 39%, 85%)' : tasks.isComplete ? 'hsl(236, 9%, 61%)'
                          : 'hsl(235, 19%, 35%)'
                        } 
                        textDecor={!! tasks.isComplete ? 'line-through' : 'none'}
                        onClick={() => handleCompleteTask(tasks.id)}
                        _hover={{cursor: 'pointer'}}
                      >
                        {tasks.title}
                      </Text>
                    </Flex>
    
                    <IconButton 
                      aria-label='Delete' 
                      icon={<Icon as={VscChromeClose} 
                      color={colorMode === 'dark' ? 'hsl(233, 14%, 35%)' : 'hsl(236, 9%, 61%)'} fontSize='26' />} 
                      bgColor='transparent'
                      onClick={() => handleDeleteTask(tasks.id)}
                      _hover={{bgColor: ''}}
                    /> 
                  </Flex>
                )
              )
            )
          } 

      <FilterTodo />
    </Flex>
  );
}