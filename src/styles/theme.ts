import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors:{
    primary: "#2C6B74",
    secondary: "#2C6B7480",
    branco: "#FFFFFF",
    cinza300: "rgba(67, 51, 51, 0.3)",
    gray:{
      "700": "#47585B",
      "500": "#999999",
      "400": "rgba(153, 153, 153, 0.5)",
      "100": "#F5F8FA",
      

    }
  },
  fonts:{
    heading: "Inter",
    body: "Inter"
  },
  styles:{
    global:{
      body:{
        bg: "gray.100"
      }
    }
  }
})