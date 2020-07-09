import styled from 'styled-components';
import { motion } from 'framer-motion';

export const videoConstraints = {
    facingMode: "forward"
};

export const WebcamContainer = styled(motion.div)`
	margin: 0 auto;
	max-width: 700px;
	height: auto;
	display: flex !important;
	margin-bottom: 20px;
	flex-direction: column;

	@media (max-width: 720px) {
		margin: 0 20px;
	}
`;

export const WebcamContainerVariant = {
    hidden: {
        opacity: 0.5,
        y: -1000
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
};