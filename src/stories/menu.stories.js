import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi";

export const Default = () => (
  <Menu>
    <MenuButton 
    rightIcon={<BiChevronDown />}
    px={4}
    py={2}
    transition="all 0.2s"
    borderRadius="md"
    borderWidth="1px"
    borderColor="gray.75"
    bg="gray.50"
    _hover={{ bg: "gray.100" }}
    _expanded={{ bg: "gray.200" }}
    _focus={{ boxShadow: "outline" }}
    >
      Actions
    </MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  </Menu>
)

const MenuStory = {
  title: "Form/Menu",
  component: Menu
}

export default MenuStory

