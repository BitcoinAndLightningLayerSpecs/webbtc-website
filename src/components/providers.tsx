import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

interface ProvidersProps {
  title: string;
  description: string;
  apps: {
    name: string;
    image: string;
    link?: string;
  }[];
}

export default function Providers(props: ProvidersProps) {
  const { title, description, apps } = props;
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
      fontSize: { xs: "38px", sm: "54px" },
      fontWeight: "800",
      lineHeight: { xs: "49px", sm: "70px" },
    },
    description: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "30px",
      opacity: "0.8",
    },
    imagesContainer: {
      textAlign: "center",
      margin: "40px auto",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      a: {
        margin: "10px",
        img: {
          width: { xs: "80px", sm: "100px", md: "140px" },
          height: { xs: "80px", sm: "100px", md: "140px" },
        }
      },
    },
  };
  return (
    <Container sx={styles.root}>
      <Box sx={styles.rootText}>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.description}>{description}</Typography>
      </Box>
      <Box sx={styles.imagesContainer}>
        {apps.map(({ image, name, link }) => (
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} key={name}>
            <a href={link} rel="noopener">
              <img src={image} alt={name} />
            </a>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}
