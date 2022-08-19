import type { NextPage } from "next";
import Main from "../src/components/main";
import HeaderWebLN from "../src/containers/webln/header";
import Landing from "../src/containers/webln/landing";
import Setup from "../src/containers/webln/setup";
import Section1 from "../src/containers/webln/section1";
import Section2 from "../src/containers/webln/section2";
import ProvidersWebLN from "../src/containers/webln/providers";
import ContactWebLN from "../src/containers/webln/contact";
import Footer from "../src/containers/webln/footer";
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
        <Setup />
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
        <ProvidersWebLN />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ContactWebLN />
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
