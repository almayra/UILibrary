import { IconButton, HStack } from "@chakra-ui/react"
import { AiOutlineScan, AiOutlineArrowLeft } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";

export const Variants = () => (
  <HStack>
    <IconButton
    bgColor="primary.400"
    size="lg"
    icon={<AiOutlineScan size={20} color="white" />}
    boxShadow="0 0 6px 1px #efdfde"
    isRound
    />
    <IconButton
      bgColor="primary.400"
      size="md"
      icon={<BiPlus size={16} color="white" />}
      isRound
    />
    <IconButton
      bgColor="primary.400"
      size="md"
      icon={<RiImageAddLine size={16} color="white" />}
      isRound
    />
    <IconButton
      bgColor="gray.75"
      size="md"
      icon={<AiOutlineArrowLeft size={16} color="white" />}
      isRound
    />
  </HStack>
)

const IconButtonStory = {
  title: "Display/Icon Button",
  component: IconButton
}

export default IconButtonStory