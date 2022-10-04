import type { NextPage } from "next";
import Main from "../src/components/main";
import HeaderWebLN from "../src/containers/webln/header";
import Landing from "../src/containers/webln/landing";
import Setup from "../src/containers/webln/setup";
import Section1 from "../src/containers/webln/section1";
import ProvidersWebLN from "../src/containers/webln/providers";
import { motion } from "framer-motion";
import FooterWebBTC from "../src/containers/webbtc/footer";
import Services from "../src/containers/webln/services";

const Home: NextPage = () => {
  return (
    <Main>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <HeaderWebLN />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Landing />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Setup />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProvidersWebLN />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <FooterWebBTC />
      </motion.div>
    </Main>
  );
};

export default Home;
