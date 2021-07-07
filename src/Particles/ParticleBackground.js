import React from 'react'
import Particles from 'react-particles-js'
import ParticlesConfig from './particle-config';
import { AnimatePresence, motion } from 'framer-motion';

function ParticleBackground() {
    return (
        <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 1 }} exit={{ opacity: 0 }}>
            <Particles params={ParticlesConfig}></Particles>
            </motion.div>
        </div>
    )
}

export default ParticleBackground
