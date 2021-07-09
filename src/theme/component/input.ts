function variantFilled(props: Record<string, any>) {
  return {
    field: {
      bg: "gray.50",
      border: "1px solid",
      borderColor: "gray.100",
      color: "gray.100",
      _hover: {
        bg: "gray.75",
      },
      _invalid: {
        borderColor: "danger.300",
      },
      _focus: {
        bg: "transparent",
        borderColor: "primary.900",
      },
    },
  };
}

export const InputStyles = {
  variants: {
    filled: variantFilled,
  },
};

export default variantFilled;
