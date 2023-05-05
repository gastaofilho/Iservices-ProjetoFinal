import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors:{
    primary: "#2C6B74",
    secondary: "#2C6B7480",
    white: "#FFFFFF",
    gray:{
      "900": "#2F2F2F",
      "700": "#47585B",
      "600": "#EFEFEF",
      "500": "#999999",
      "400": "rgba(153, 153, 153, 0.5)",
      "300":"rgba(67, 51, 51, 0.3)",
      "200":"#D9D9D9",
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