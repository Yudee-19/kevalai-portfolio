"use client";
import React from "react";
import { delay, motion } from "framer-motion";

export function ColourfulText({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const colors = ["#1f2b5d"];

    const shuffledColors = React.useMemo(
        () => [...colors].sort(() => Math.random() - 0.5),
        []
    );

    const textVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const charVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            color: shuffledColors[i % shuffledColors.length],
            transition: {
                delay: i * 0.05,
                duration: 0.5,
            },
        }),
    };

    return (
        <motion.div
            className={className}
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    variants={charVariants}
                    custom={index}
                    className="inline-block whitespace-pre"
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}
