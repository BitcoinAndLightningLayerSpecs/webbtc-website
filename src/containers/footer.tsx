import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Footer() {
  const styles = {
    root: {
      background: "#000",
      flexGrow: 1,
      padding: "60px 0px",
      margin: "auto",
    },
    container: {
      ul: {
        listStyle: "none",
        paddingLeft: 0,
      },
      li: {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "24px",
        opacity: "0.8",
      },
    },
    title: {
      fontSize: "20px",
      fontWeight: "500",
      marginBottom: "24px",
      lineHeight: "36px",
    },
  };
  return (
    <Box sx={styles.root}>
      <Container sx={styles.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={styles.title}>WebLN</Typography>
            <ul>
              <li>Made with by Bitcoiners</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={styles.title}>App & Wallet Developers</Typography>
            <ul>
              <li>Developer guide</li>
              <li>WebLN Specs</li>
              <li>App Directory</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={styles.title}>Contact</Typography>
            <ul>
              <li>Got questions? </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
