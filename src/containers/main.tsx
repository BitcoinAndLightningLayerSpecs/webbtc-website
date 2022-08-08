import Box from "@mui/material/Box";
import { ReactElement } from "react";

export default function Footer({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const styles = {
    root: {
      minWidth: "320px",
    },
  };
  return <Box sx={styles.root}>{children}</Box>;
}
