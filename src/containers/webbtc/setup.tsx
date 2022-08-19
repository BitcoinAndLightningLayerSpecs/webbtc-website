import { Box, Button, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Setup() {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: { xs: "0px 25px", md: "60px 24px 80px" },
    },
    containerImage: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      img: {
        margin: { xs: "0px", sm: "0px auto 20px" },
        width: "100%",
        maxWidth: { xs: "500px", md: "100%" },
      },
    },
    title: {
      fontSize: "38px",
      fontWeight: "800",
      lineHeight: "49px",
    },
    text: {
      marginTop: "1rem",
      fontSize: "20px",
      fontWeight: "400",
      opacity: "0.8",
    },
    containerText: {
      display: "flex",
      margin: "auto",
      flexDirection: "column",
      width: "100%",
      maxWidth: "482px",
    },
    buttonContainer: {
      display: "flex",
      alignItems: "center",
      margin: "5px auto",
      flexDirection: { xs: "column", sm: "row" },
      width: "100%",
      maxWidth: "482px",
    },
    button: {
      textTransform: "none",
      borderRadius: "10px",
      margin: { xs: "10px 15px 10px 0px", sm: "25px 25px auto 0px" },
      width: "190px",
      height: "64px",
      background: "#F2A900",
      color: "#0A0D13",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      "&:hover": {
        background: "#FFB800",
      },
    },
  };

  return (
    <Container sx={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={styles.containerImage}>
          <img src="/images/illustrations/setup.png" alt="setup" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.containerText}>
            <Typography sx={styles.title}>Get started with WebLN</Typography>
            <Typography sx={styles.text}>
              WebLN is an implementation of the WebBTC specfication that focuses
              only on off-chain Lightning Network functionality, allowing web
              apps and client providers to communicate with user wallets.
            </Typography>
          </Box>

          <Box sx={styles.buttonContainer}>
            <Button
              variant="contained"
              sx={styles.button}
              color="primary"
              endIcon={<ChevronRightIcon />}
              href="/webln"
            >
              Learn more
            </Button>
            <Button
              variant="contained"
              sx={styles.button}
              endIcon={<ChevronRightIcon />}
            >
              Developer Docs
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
