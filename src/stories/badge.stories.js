import { Badge, HStack } from "@chakra-ui/react"

export const Variants = () => (
  <HStack spacing={6}>
    <Badge variant="black">Badge</Badge>
    <Badge variant="red">Badge</Badge>
    <Badge variant="orange">Badge</Badge>
    <Badge variant="yellow">Badge</Badge>
    <Badge variant="green">Badge</Badge>
    <Badge variant="blue">Badge</Badge>
    <Badge variant="purple">Badge</Badge>
    <Badge variant="brown">Badge</Badge>
  </HStack>
)

const BadgeStory = {
  title: "Display/Badge",
  component: Badge
}

export default BadgeStory