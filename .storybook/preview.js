import CSSReset from "@chakra-ui/css-reset"
import { ChakraProvider, Box } from "@chakra-ui/react"
import { addDecorator } from "@storybook/react"
import * as React from "react"
import {theme} from "../src/theme/styles.tsx"

export const Chakra = ({ children }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box p={5}>
      {children}
    </Box>
  </ChakraProvider>
)

addDecorator(StoryFn =>
  <Chakra>
    <StoryFn />
  </Chakra>)
