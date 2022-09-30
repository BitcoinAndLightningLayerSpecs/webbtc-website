import { Box, Button, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function GetStarted() {
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
        borderRadius: "5px"
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
      width: "210px",
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
          <img src="/images/illustrations/webln-sample.svg" alt="setup" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.containerText}>
            <Typography sx={styles.title}>WebBTC &amp; Lightning</Typography>
            <Typography sx={styles.text}>
              WebLN is an implementation of the WebBTC specification that
              focuses only on off-chain Lightning Network functionality.
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
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
