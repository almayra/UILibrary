import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Checkbox
} from "@chakra-ui/react"
import { BsChevronExpand } from "react-icons/bs";
import { TableCell } from "../theme/component/table/tableCell.tsx"
import { TableHeadCell } from "../theme/component/table/tableHeadCell.tsx"
import AVATAR from "../assets/Avatar.png"

export const Simple = () => (
  <Table variant="simple" colorScheme="gray">
    <Thead>
      <Tr verticalAlign="top">
        <TableHeadCell secondString="Secondary String" append={<BsChevronExpand/>}>
          Primary String
        </TableHeadCell>
        <TableHeadCell>
          Primary String
        </TableHeadCell>
        <TableHeadCell>
          Primary String
        </TableHeadCell>
      </Tr>
    </Thead>
    <Tbody>
      <Tr verticalAlign="top">
        <Td> <Checkbox colorScheme="secondary"/> </Td>
        <TableCell bold image={AVATAR} secondString="secondary">Table Cell</TableCell>
        <TableCell>Table Cell</TableCell>
      </Tr>
    </Tbody>
  </Table>
)

export const Variant = () => (
  <Table variant="simple" colorScheme="gray">
    <Thead>
      <Tr verticalAlign="top">
        <TableHeadCell secondString="Secondary String" append={<BsChevronExpand/>}>
          Primary String
        </TableHeadCell>
        <TableHeadCell secondString="Secondary String">
          Primary String
        </TableHeadCell>
        <TableHeadCell>
          Primary String
        </TableHeadCell>
        <TableHeadCell>
          Primary String
        </TableHeadCell>
      </Tr>
    </Thead>
    <Tbody>
      <Tr verticalAlign="top">
        <Td> <Checkbox colorScheme="secondary"/> </Td>
        <TableCell bold image={AVATAR} secondString="secondary">Table Cell</TableCell>
        <TableCell prepend={<BsChevronExpand/>} secondString="secondary">Table Cell</TableCell>
        <TableCell prepend={<BsChevronExpand/>}>Table Cell</TableCell>
      </Tr>
    </Tbody>
  </Table>
)

const TableStory = {
  title: "Display/Table",
  component: Table
}

export default TableStory