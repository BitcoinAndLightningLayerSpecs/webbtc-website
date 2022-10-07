import type { NextPage } from "next";
import Main from "../src/components/main";
import HeaderWebBTC from "../src/containers/webbtc/header";
import Landing from "../src/containers/webbtc/landing";
import GetStarted from "../src/containers/webbtc/getStarted";
import Section1 from "../src/containers/webbtc/section1";
import Section2 from "../src/containers/webbtc/section2";
import ContactWebBTC from "../src/containers/webbtc/contact";
import Specifications from "../src/containers/webbtc/specifications";
import Footer from "../src/containers/webbtc/footer";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <Main>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <HeaderWebBTC />
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
        <Section1 />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Section2 />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Specifications />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <GetStarted />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </Main>
  );
};

export default Home;
