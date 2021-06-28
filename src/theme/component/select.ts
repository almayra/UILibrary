function variantFilled(props: Record<string, any>) {
  return {
    field: {
      bg: "gray.50",
      border: "1px solid",
      borderColor: "gray.100",
      color: "gray.500",
      _hover: {
        bg: "gray.75",
      },
      _focus: {
        borderColor: "gray.500",
      },
    },
  };
}

export const SelectStyles = {
  variants: {
    filled: variantFilled,
  },
};
