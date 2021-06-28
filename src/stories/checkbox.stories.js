import { Checkbox, HStack } from "@chakra-ui/react"

export const State = () => (
  <HStack>
    <Checkbox colorScheme="secondary"/>
    <Checkbox colorScheme="secondary" isIndeterminate/>
    <Checkbox colorScheme="secondary" isChecked/>
    <Checkbox colorScheme="secondary" isDisabled/>
    <Checkbox colorScheme="secondary" isInvalid/>
  </HStack>
)

export const Size = () => (
  <HStack>
    <Checkbox size="sm" colorScheme="secondary"/>
    <Checkbox size="md" colorScheme="secondary"/>
    <Checkbox size="lg" colorScheme="secondary"/>
  </HStack>
)

export const WithText = () => (
  <Checkbox textColor="gray.700" colorScheme="secondary">Checkbox</Checkbox>
)

const CheckboxStory = {
  title: "Form/Checkbox",
  component: Checkbox
}

export default CheckboxStory