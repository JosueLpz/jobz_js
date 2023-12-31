"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import { StartSteps } from "../components";
import Image from "next/image";

const GetStarted = (props) => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div variants={planetVariants("left")} className={`flex-1 ${styles.flexCenter}`}>
        <Image src={props.img} alt={props.alt} className="w-[90%] h-[90%] object-contain" />
      </motion.div>
      <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title={props.sub} />
        <TitleText title={props.title} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
          {props.text.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
