import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Rounded from '../../common/RoundedButton/Index';
import { opacity, slideUp } from './animation';
import styles from './style.module.scss';
export default function Description() {

    const phrase = "I work in the sweet spot for innovation, somewhere between strategy, design, and technology. I love the Web and the work we do.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>I am a passionate theme developer with expertise in designing and developing innovative web experiences. I specialize in Front-End Development, Theme Customization, Responsive Design, and Performance Optimization.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
