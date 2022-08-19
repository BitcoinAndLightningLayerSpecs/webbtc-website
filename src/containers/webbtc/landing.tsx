import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Landing() {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      justifyContent: "center",
      padding: { xs: "0px 25px", sm: "0px 20px", md: "0px 100px" },
      maxWidth: { xs: "500px", md: "1200px" },
      margin: {
        xs: "0px auto",
        md: "50px auto",
      },
    },
    title: {
      fontSize: {
        xs: "38px",
        lg: "54px",
      },
      fontWeight: "800",
      lineHeight: {
        xs: "46px",
        lg: "70px",
      },
      marginBottom: "24px",
      b: {
        color: "#C1E2E6",
      },
    },
    subtitle: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "30px",
      marginBottom: "16px",
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
    image: {
      display: "flex",
      justifyContent: "center",
      img: {
        display: { xs: "none", md: "flex" },
        maxWidth: { xs: "300px", md: "300px", lg: "370px" },
      },
    },
  };

  return (
    <Container sx={styles.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <Typography sx={styles.title}>
            Combine the power of Bitcoin with your website!
          </Typography>
          <Typography sx={styles.subtitle}>
            WebBTC is a set of specifications for web apps and client providers
            to facilitate communication with Bitcoin & Lightning wallets.
          </Typography>
          <Typography sx={styles.subtitle}>
            It provides a programmatic, permissioned interface for letting web
            apps send or receive payments and much more.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={styles.image}>
            <img src="/images/illustrations/globe.png" alt="globe" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
