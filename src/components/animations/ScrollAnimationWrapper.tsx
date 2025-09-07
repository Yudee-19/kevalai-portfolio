"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollAnimationWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const ScrollAnimationWrapper = ({
    children,
    className,
    delay = 0.25,
}: ScrollAnimationWrapperProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};
