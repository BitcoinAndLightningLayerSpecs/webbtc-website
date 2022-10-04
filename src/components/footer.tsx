import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface FooterProps {
  column1: {
    title: string;
    link: string;
  };
  column2: {
    title: string;
    links: Array<{ title: string; link: string }>;
  };
  column3: {
    title: string;
    links: Array<{ title: string; link: string }>;
  };
}

export default function Footer({ column1, column2, column3 }: FooterProps) {
  const styles = {
    root: {
      background: "#000",
      flexGrow: 1,
      padding: "60px 0px",
      margin: "auto",
      a: {
        color: "#fff",
        textDecoration: "none",
        "&:hover": {
          color: "#F2A900",
        },
      },
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
        a: {
          color: "#fff",
          textDecoration: "none",
          "&:hover": {
            color: "#F2A900",
          },
        },
      },
    },
    title: {
      fontSize: "20px",
      fontWeight: "500",
      marginBottom: "24px",
      lineHeight: "36px",
    },
    heartIcon: {
      fontSize: 16,
      marginBottom: "-2px",
      position: "relative",
    },
  };
  return (
    <Box sx={styles.root}>
      <Container sx={styles.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={styles.title}>
              <a href={column1.link}>
                {column1.title}
              </a>
            </Typography>
            <ul>
              <li>
                Made with <FavoriteIcon sx={styles.heartIcon} /> by Bitcoiners
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={styles.title}>{column2.title}</Typography>
            <ul>
              {column2.links.map((link: { title: string; link: string }) => (
                <li>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={styles.title}>{column3.title}</Typography>
            <ul>
              {column3.links.map((link: { title: string; link: string }) => (
                <li>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
