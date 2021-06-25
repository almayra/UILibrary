export const BadgeStyles = {
  baseStyle: {
    fontSize: 14,
    borderRadius: "base",
    cursor: "pointer",
    textTransform: "none",
    fontWeight: "regular",
  },
  sizes: {
    sm: {
      px: 2,
      py: 1,
    },
    md: {
      px: 3,
      py: 2,
    },
    lg: {
      px: 2,
      py: 4,
    },
  },
  variants: {
    black: {
      borderRadius: "24px",
      bg: "gray.10",
      color: "gray.900",
      border: "2px solid",
      borderColor: "gray.50",
      _active: {
        bg: "gray.900",
        color: "gray.10",
      },
      _focus: {
        bg: "transparent",
      },
      _disabled: {
        color: "gray.50",
      },
    },
    red: {
      borderRadius: "24px",
      bg: "gray.10",
      color: "#E11900",
      border: "2px solid",
      borderColor: "#F1998E",
      _active: {
        bg: "#E11900",
        color: "gray.10",
      },
      _focus: {
        bg: "transparent",
      },
    },
    orange: {
      borderRadius: "24px",
      bg: "gray.10",
      color: "#C14F29",
      border: "2px solid",
      borderColor: "#FABDA5",
      _active: {
        bg: "#C14F29",
        color: "gray.10",
      },
      _focus: {
        bg: "transparent",
      },
    },
    yellow: {
      borderRadius: "24px",
      bg: "gray.10",
      color: "#674D1B",
      border: "2px solid",
      borderColor: "#FFCF70",
      _active: {
        bg: "#FFCF70",
        color: "gray.10",
      },
      _focus: {
        bg: "transparent",
      },
    },
    green: {
      borderRadius: "24px",
      bg: "gray.10",
      color: "#03703C",
      border: "2px solid",
      borderColor: "#66D19E",
      _active: {
        bg: "#03703C",
        color: "gray.10",
      },
      _focus: {
        bg: "transparent",
      },
    },
    blue: {
      borderRadius: "24px",
      bg: "gray.10",
      color: "#276EF1",
      border: "2px solid",
      borderColor: "#A0BFF8",
      _active: {
        bg: "#276EF1",
        color: "gray.10",
      },
      _focus: {
        bg: "transparent",
      },
    },
    purple: {
      borderRadius: "24px",
      bg: "gray.10",
      color: "#7356BF",
      border: "2px solid",
      borderColor: "#C1B5E3",
      _active: {
        bg: "#7356BF",
        color: "gray.10",
      },
      _focus: {
        bg: "transparent",
      },
    },
    brown: {
      borderRadius: "24px",
      bg: "gray.10",
      color: "#99644C",
      border: "2px solid",
      borderColor: "#D2BBB0",
      _active: {
        bg: "#99644C",
        color: "gray.10",
      },
      _focus: {
        bg: "transparent",
      },
    },
  },
  defaultProps: {
    variant: "black",
    size: "md",
  },
};

export default BadgeStyles;
