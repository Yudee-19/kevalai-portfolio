import { cn } from "@/lib/util";
import React from "react";

export const Title = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                " font-switzer text-4xl lg:text-6xl font-semibold  text-primary",
                className
            )}
        >
            {children}
        </div>
    );
};

export const Description = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                " font-switzer text-md lg:text-lg font-light  text-shadow-gray-300",
                className
            )}
        >
            {children}
        </div>
    );
};
