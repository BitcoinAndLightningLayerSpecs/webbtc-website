import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function Providers() {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0px 24px",
      margin: "80px auto 120px",
      flexGrow: 1,
      textAlign: "center",
      maxWidth: { xs: "390px", sm: "100%" },
      width: "100%",
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
      justifyContent: "space-between",
      img: {
        margin: "0px auto",
        width: { xs: "140px", sm: "140px" },
        height: { xs: "140px", sm: "140px" },
      },
    },
  };
  return (
    <Box sx={styles.root}>
      <Box sx={styles.rootText}>
        <Typography sx={styles.title}>Get your WebLN Wallet now!</Typography>
        <Typography sx={styles.description}>
          Set yourself up for Bitcoin payments on the web by choosing from one
          of the providers available today.
        </Typography>
      </Box>
      <Box sx={styles.imagesContainer}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <img src="/images/providers/alby.png" alt="providers" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <img src="/images/providers/zap.png" alt="providers" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <img src="/images/providers/zap.png" alt="providers" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <img src="/images/providers/joule.png" alt="providers" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <img src="/images/providers/breez.png" alt="providers" />
        </motion.div>
      </Box>
    </Box>
  );
}
