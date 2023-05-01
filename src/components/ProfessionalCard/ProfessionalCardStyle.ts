import { chakra} from "@chakra-ui/react";
import { theme } from "../../styles/theme";


export const ProfessionalCardStyle = chakra("li" , {
  baseStyle: {
    width: "354px",
    height: "298px",
    backgroundColor: theme.colors.secondary,
    fontWeight: "600",
    borderWidth: "1px",
    borderColor: "red",
    borderStyle: "solid",
    borderRadius: "8px"
  }
})