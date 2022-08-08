import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Landing() {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      maxWidth: "665px",
      padding: "0px 25px",
      margin: {
        xs: "50px auto",
        md: "150px auto",
      },
    },
    title: {
      fontSize: {
        xs: "26px",
        sm: "38px",
      },
      fontWeight: "800",
      lineHeight: {
        xs: "39px",
        sm: "49px",
      },
      marginBottom: "24px",
      b: {
        color: "#C1E2E6",
      },
    },
    subtitle: {
      fontSize: {
        xs: "16px",
        sm: "20px",
      },
      fontWeight: "500",
      lineHeight: { xs: "24px", sm: "36px" },
      marginBottom: "48px",
      opacity: "0.8",
    },
    button: {
      textTransform: "none",
      borderRadius: "10px",
      margin: { xs: "10px 15px", sm: "auto 15px" },
      width: "190px",
      height: "64px",
      background: "#F2A900",
      color: "#0A0D13",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      "&:hover": {
        background: "#1DA2CC",
      },
    },
  };

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>
        Building on <b>WebLN</b>
        <br />
        the Bitcoin Lightning Web Standard
      </Typography>
      <Typography sx={styles.subtitle}>
        A unified standard for websites to interact with the Bitcoin Lightning
        Network. Request or send payments & much more
      </Typography>
      <Box>
        <Button variant="contained" sx={styles.button} color="primary">
          Learn more
        </Button>
        <Button variant="contained" sx={styles.button}>
          Developer Docs
        </Button>
      </Box>
    </Box>
  );
}
