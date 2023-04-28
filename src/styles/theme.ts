import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors:{
    primary:{
      verde_escuro: "#2C6B74"
    },
    secundary: {
      verde_claro: "#2C6B7480"
    }
  }
})