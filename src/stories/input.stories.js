import { 
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea
} from "@chakra-ui/react";
import { AiOutlineFolder } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

export const WithIcon = () => (
  <VStack>
    <InputGroup>
      <InputLeftElement children={<AiOutlineFolder/>}/>
      <Input placeholder="With Leading Icon" variant="filled"/>
    </InputGroup>
    <InputGroup>
      <Input placeholder="With Trailing Icon" variant="filled"/>
      <InputRightElement children={<BiChevronDown/>}/>
    </InputGroup>
  </VStack>
)

export const WithInputLabel = () => (
  <VStack>
    <FormControl>
      <FormLabel>Email Address</FormLabel>
      <Input placeholder="Enter your email" variant="filled"/>
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  </VStack>
)

export const State = () => (
  <VStack spacing={6}>
    <FormControl>
      <Input placeholder="Enter your email" variant="filled"/>
    </FormControl>
    <FormControl isDisabled>
      <Input placeholder="Enter your email" variant="filled"/>
    </FormControl>
    <FormControl isInvalid>
      <Input placeholder="Enter your email" variant="filled"/>
    </FormControl>
  </VStack>
)

export const Types = () => (
  <VStack spacing={6}>
    <FormControl>
      <FormLabel>Email Address</FormLabel>
      <Input type="email" placeholder="Enter your email" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
    <FormControl id="first-name" isRequired>
      <FormLabel>First name</FormLabel>
      <Input placeholder="First name" />
    </FormControl>
    <FormControl id="amount">
      <FormLabel>Amount</FormLabel>
      <NumberInput max={50} min={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
    <Textarea placeholder="Here is a sample placeholder" />
  </VStack>
)

const InputStory = {
  title: "Form/Input Field",
  component: Input
}

export default InputStory