import { cn } from "@/lib/util";
import React from "react";

const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(" max-w-7xl mx-auto px-10", className)}>
            {children}
        </div>
    );
};

export default Container;
