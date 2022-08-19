import Box from "@mui/material/Box";
import { ReactElement } from "react";

interface MainProps {
  children: ReactElement | ReactElement[];
}

export default function Footer({ children }: MainProps) {
  const styles = {
    root: {
      minWidth: "320px",
    },
  };
  return <Box sx={styles.root}>{children}</Box>;
}
