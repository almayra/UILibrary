import { Dropdown } from "../theme/component/dropdown/dropdown.tsx"
import { Menu } from "../theme/component/dropdown/menu.tsx"
import { SubMenu } from "../theme/component/dropdown/subMenu.tsx"
import { FormControl, FormLabel, HStack } from "@chakra-ui/react"

export const WithLabel = () => (
  <FormControl>
    <FormLabel>Filter</FormLabel>
    <Dropdown placeholder="Select Option" append prepend>
      <Menu menuLabel="Bank" append>
        <SubMenu>Bank BCA</SubMenu>
        <SubMenu>Bank BNI</SubMenu>
        <SubMenu>Bank BRI</SubMenu>
        <SubMenu>Bank Maybank</SubMenu>
      </Menu>
      <Menu menuLabel="Perusahaan" append>
        <SubMenu>PT Agricon</SubMenu>
        <SubMenu>PT Agri Hari Ini</SubMenu>
        <SubMenu>PT Harapan Anak Bangsa</SubMenu>
        <SubMenu>PT FanAttics</SubMenu>
      </Menu>
    </Dropdown>
  </FormControl>
)

export const State = () => (
  <HStack spacing={6}>
    <Dropdown placeholder="Select Option" append prepend>
      <Menu menuLabel="Option 1"/>
      <Menu menuLabel="Option 2"/>
    </Dropdown>
    <Dropdown placeholder="Select Option" disabled/>
  </HStack>
)

const DropdownStory = {
  title: "Form/Dropdown",
  component: Dropdown
}

export default DropdownStory