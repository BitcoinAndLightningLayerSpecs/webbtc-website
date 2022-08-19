import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";

export default function Cards({
  tag,
  title,
  text,
  cards,
}: {
  tag: string;
  title: string;
  text: string;
  cards: Array<{ title: string; text: string; image: string }>;
}) {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      textAlign: { xs: "left", md: "center" },
      padding: "50px 24px",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      maxWidth: { xs: "530px", md: "1100px" },
    },
    description: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: { xs: "flex-start", md: "center" },
    },
    tag: {
      background: "#C1E2E6",
      color: "#0A0D13",
      borderRadius: "5px",
      fontSize: "16px",
      lineHeight: "24px",
      padding: "5px 10px",
      display: "flex",
    },
    title: {
      fontWeight: "800",
      fontSize: "38px",
      lineHeight: "49px",
      marginTop: "18px",
      marginBottom: "26px",
      textAlign: { xs: "left", md: "center" },
    },
    text: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "30px",
      maxWidth: "825px",
      opacity: "0.8",
    },
    cardsContainer: {
      margin: "0px auto",
    },
    paper: {
      background: "#111520",
      padding: "30px 30px 0px",
      margin: { xs: "15px auto", md: "15px" },
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100%",
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
    },
    cardTitle: {
      fontSize: "24px",
      lineHeight: "43px",
      fontWeight: "900",
      marginBottom: "8px",
    },
    cardText: {
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: "400",
      opacity: "0.8",
    },
    cardImage: {
      marginBottom: "16px",
      img: {
        maxWidth: "100%",
      },
    },
    gridItem: {
      margin: "15px auto",
    },
  };
  return (
    <Container sx={styles.root}>
      <Box sx={styles.description}>
        <Typography sx={styles.tag}>{tag}</Typography>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.text}>{text}</Typography>
      </Box>
      <Grid container sx={styles.cardsContainer}>
        {cards.map((card: { image: string; title: string; text: string }) => (
          <Grid item xs={12} md={4} sx={styles.gridItem}>
            <Paper sx={styles.paper} elevation={0}>
              <Box sx={styles.cardImage}>
                <img src={card.image} alt={card.title} />
              </Box>
              <Typography sx={styles.cardTitle}>{card.title}</Typography>
              <Typography sx={styles.cardText}>{card.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
