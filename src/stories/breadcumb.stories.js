import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi"

export const Default = () => (
  <Breadcrumb fontSize="12px" spacing="4px" separator={<BiChevronRight color="gray"/>}>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem fontWeight="bold" isCurrentPage>
      <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
)

const BreadcrumbStory = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb
}

export default BreadcrumbStory