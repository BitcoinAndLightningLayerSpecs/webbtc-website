import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Contact() {
  const styles = {
    root: {
      flexGrow: 1,
      textAlign: "center",
      maxWidth: { xs: "600px", md: "100%" },
      margin: "60px auto 80px",
      padding: "0px 24px",
    },
    title: {
      fontSize: "38px",
      fontWeight: "800",
      lineHeight: "49px",
    },
    text: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "30px",
      opacity: "0.8",
    },
    button: {
      width: "173px",
      height: "59px",
      borderRadius: "10px",
      fontWeight: "500",
      textTransform: "capitalize",
      fontSize: "16px",
      lineHeight: "24px",
    },
    boxContainer: {
      maxWidth: "780px",
      margin: "5px auto 60px",
    },
  };
  return (
    <Box sx={styles.root}>
      <Typography style={styles.title}>
        Your favorite app doesn't support WebLN yet?
      </Typography>
      <Box sx={styles.boxContainer}>
        <Typography style={styles.text}>
          If your favorite app doesn't support WebLN yet, get in touch with the
          developer company and ask them to learn about how the protocol can
          help their users.
        </Typography>
      </Box>
      <Button sx={styles.button} variant="contained" color="secondary">
        Send Email
      </Button>
    </Box>
  );
}
