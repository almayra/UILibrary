import { Select, VStack } from "@chakra-ui/react";

export const State = () => (
  <VStack spacing={6}>
    <Select variant="filled" placeholder="Select Option">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
    <Select variant="filled" placeholder="Select Option" isDisabled/>
  </VStack>
)

export const Size = () => (
  <VStack spacing={6}>
    <Select variant="filled" placeholder="Small Size" size="sm"/>
    <Select variant="filled" placeholder="Medium Size" size="md"/>
    <Select variant="filled" placeholder="Large Size" size="lg"/>
  </VStack>
)

const SelectStory = {
  title: "Form/Select",
  component: Select
}

export default SelectStory