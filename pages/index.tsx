import type { NextPage } from "next";
import Main from "../src/containers/main";
import Header from "../src/containers/header";
import Landing from "../src/containers/landing";
import Setup from "../src/containers/setup";
import Section1 from "../src/containers/section1";
import Section2 from "../src/containers/section2";
import Providers from "../src/containers/providers";
import Contact from "../src/containers/contact";
import Footer from "../src/containers/footer";
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
        <Header />
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
        <Providers />
      </motion.div>
      <motion.div
        transition={{ ease: "easeIn", duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Contact />
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
