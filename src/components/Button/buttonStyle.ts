import { chakra } from "@chakra-ui/react";
import { theme } from "../../styles/theme"

export const ButtonStyle = chakra("button" , {
  baseStyle: {
    width: "142px",
    height: "48px",
    borderRadius: "8px",
    backgroundColor: theme.colors.primary,
    color: theme.colors.branco
  }
})