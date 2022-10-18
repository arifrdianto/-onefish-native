/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import {
  Badge,
  Box,
  Button,
  CheckIcon,
  Chip,
  DeleteIcon,
  extendTheme,
  FormControl,
  HStack,
  InfoIcon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  SearchIcon,
  Stack,
  Text,
  ThemeProvider,
  VStack,
  WarningOutlineIcon,
} from './onefish-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider
      theme={extendTheme({
        fontConfig: {
          Inter: {
            400: {
              normal: 'Inter-Regular',
              italic: 'Inter-Italic',
            },
            500: {
              normal: 'Inter-Medium',
              italic: 'Inter-MediumItalic',
            },
            600: {
              normal: 'Inter-SemiBold',
              italic: 'Inter-MediumItalic',
            },
            700: {
              normal: 'Inter-Bold',
              italic: 'Inter-BoldItalic',
            },
          },
        },
        fontWeights: {
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
        fonts: {
          heading: 'Inter',
          body: 'Inter',
          mono: 'Inter',
        },
      })}
    >
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
          <Header />
          <Box bgColor="bg.white">
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Input Variants</Text>
              </Box>
              <Input placeholder="outline (default)" />
              <Input variant="underlined" placeholder="underlined" />
              <Input variant="rounded" placeholder="rounded" />
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Input Size</Text>
              </Box>
              <Input size="xs" placeholder="xs Input" />
              <Input size="sm" placeholder="sm Input" />
              <Input size="md" placeholder="md Input" />
              <Input size="lg" placeholder="lg Input" />
              <Input size="xl" placeholder="xl Input" />
              <Input size="2xl" placeholder="2xl Input" />
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Input State</Text>
              </Box>
              <Input placeholder="Enable" />
              <Input placeholder="Invalid" isInvalid />
              <Input placeholder="Disable" isDisabled />
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Input Addons</Text>
              </Box>
              <Stack alignItems="center">
                <InputGroup w="full">
                  <InputLeftAddon children="https://" />
                  <Input flex={1} placeholder="efishery" />
                  <InputRightAddon children={'.ai'} />
                </InputGroup>
              </Stack>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Form Control</Text>
              </Box>

              <FormControl>
                <FormControl.Label rightIcon={<InfoIcon size="sm" />}>
                  Form Label
                </FormControl.Label>
                <Input
                  placeholder="Placeholder"
                  leftElement={<SearchIcon size="sm" ml="3" />}
                  rightElement={<WarningOutlineIcon size="sm" mr="3" />}
                />
                <FormControl.HelperText
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Give your project a title.
                </FormControl.HelperText>
              </FormControl>

              <FormControl isInvalid isRequired>
                <FormControl.Label>Form Label</FormControl.Label>
                <Input placeholder="Placeholder" />

                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Try different from previous passwords.
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl>
                <FormControl.Label>Form Label</FormControl.Label>
                <Input placeholder="Input Disabled" isDisabled />
                <FormControl.HelperText>
                  Give your project a title.
                </FormControl.HelperText>
              </FormControl>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Button Variants</Text>
              </Box>

              <Button>Solid</Button>
              <Button variant="subtle">Subtle</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Button Colors</Text>
              </Box>

              <Button>Primary</Button>
              <Button colorScheme="critical">Critical</Button>
              <Button colorScheme="caution">Caution</Button>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Button Sizes</Text>
              </Box>

              <Button>Medium</Button>
              <Button size="lg">Large</Button>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Button State</Text>
              </Box>

              <Button leftIcon={<SearchIcon size="sm" />}>Default</Button>
              <Button isDisabled>Disable</Button>
              <Button isLoading isLoadingText="Loading...">
                Upload
              </Button>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Badge Colors</Text>
              </Box>
              <HStack space="4">
                <VStack space="2">
                  <Badge variant="solid">Badge</Badge>
                  <Badge variant="solid" colorScheme="caution">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="critical">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="gray">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="green">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="aqua">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="lightBlue">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="blue">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="orange">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="pink">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="purple">
                    Badge
                  </Badge>
                  <Badge variant="solid" colorScheme="lime">
                    Badge
                  </Badge>
                </VStack>
                <VStack space="2">
                  <Badge>Badge</Badge>
                  <Badge colorScheme="caution">Badge</Badge>
                  <Badge colorScheme="critical">Badge</Badge>
                  <Badge colorScheme="gray">Badge</Badge>
                  <Badge colorScheme="green">Badge</Badge>
                  <Badge colorScheme="aqua">Badge</Badge>
                  <Badge colorScheme="lightBlue">Badge</Badge>
                  <Badge colorScheme="blue">Badge</Badge>
                  <Badge colorScheme="orange">Badge</Badge>
                  <Badge colorScheme="pink">Badge</Badge>
                  <Badge colorScheme="purple">Badge</Badge>
                  <Badge colorScheme="lime">Badge</Badge>
                </VStack>
              </HStack>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Badge Variants</Text>
              </Box>

              <HStack space="2">
                <Badge variant="solid">Solid</Badge>
                <Badge>Subtle</Badge>
                <Badge variant="outline">Outline</Badge>
              </HStack>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Badge Dot</Text>
              </Box>

              <HStack space="2">
                <Badge variant="solid" dot>
                  Online
                </Badge>
                <Badge dot>Online</Badge>
              </HStack>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Chip</Text>
              </Box>
              <HStack space="4">
                <Chip>Default</Chip>
                <Chip isPressed>Active</Chip>
              </HStack>
            </Stack>
            <Stack px="8" py="4" space={4}>
              <Box
                pb="2"
                borderBottomWidth="1"
                borderBottomColor="border.brand"
              >
                <Text fontWeight="semibold">Chip Icon</Text>
              </Box>
              <HStack space="4">
                <Chip leftIcon={<CheckIcon size="sm" />}>Check</Chip>
                <Chip rightIcon={<DeleteIcon size="sm" />} isPressed>
                  Gurame
                </Chip>
              </HStack>
            </Stack>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
