import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

interface ServicesProps {
  title: string;
  apps: {
    name: string;
    image: string;
    link?: string;
  }[];
}

export default function Services(props: ServicesProps) {
  const { title, apps } = props;
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0px 24px",
      margin: "80px auto 120px",
      textAlign: "center",
      maxWidth: { xs: "600px", md: "100%" },
    },
    rootText: {
      maxWidth: "825px",
    },
    title: {
      fontSize: "16px",
      opacity: 0.75
    },
    imagesContainer: {
      textAlign: "center",
      margin: "20px auto",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      a: {
        display: "inline-block",
        margin: { xs: "10px", sm: "15px", md: "25px" },
        img: {
          height: { xs: "25px", sm: "30px", md: "40px" },
        }
      },
    },
  };
  return (
    <Container sx={styles.root}>
      <Box sx={styles.rootText}>
        <Typography sx={styles.title}>{title}</Typography>
      </Box>
      <Box sx={styles.imagesContainer}>
        {apps.map(({ image, name, link }) => (
          <motion.div key={name} style={{
            filter: 'grayscale(100%)',
            opacity: 0.5
          }} whileHover={{ filter: 'none', opacity: 1 }} whileTap={{ scale: 0.8 }}>
            <a href={link} title={name} rel="noopener">
              <img src={image} alt={name} />
            </a>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}
