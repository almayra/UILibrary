import { Radio, HStack } from "@chakra-ui/react";

export const States = () => (
  <HStack>
    <Radio colorScheme="secondary"/>
    <Radio colorScheme="secondary" isDisabled/>
    <Radio colorScheme="secondary" isInvalid/>
  </HStack>
)

export const Size = () => (
  <HStack>
    <Radio size="sm" colorScheme="secondary"/>
    <Radio size="md" colorScheme="secondary"/>
    <Radio size="lg" colorScheme="secondary"/>
  </HStack>
)

export const WithText = () => (
  <Radio textColor="gray.700" colorScheme="secondary">Radio</Radio>
)

const RadioStory = {
  title: "Form/Radio",
  component: Radio
}

export default RadioStory