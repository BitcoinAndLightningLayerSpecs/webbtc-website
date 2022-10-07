import { Box, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";

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
  };

  return (
    <Container sx={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={styles.containerImage}>
          <img src="/images/illustrations/webln-sample.svg" alt="setup" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.containerText}>
            <Typography sx={styles.title}>
              Easy and quick to get started
            </Typography>
            <Typography sx={styles.text}>
              WebLN is a set of specifications for web apps and client providers
              to facilitate communication with the users' Bitcoin Lightning
              wallets.
            </Typography>
            <Typography sx={styles.text}>
              It provides a programmatic, permissioned interface for letting web
              apps send or receive payments and much more.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
