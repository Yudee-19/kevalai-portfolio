import { cn } from "@/lib/util";
import React from "react";

const Card = ({
    className,
    children,
    icon,
}: {
    className?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "bg-secondary w-full h-full rounded-2xl max-w-md mx-auto shadow-xl p-10",
                className
            )}
        >
            {icon && <div className="icon bg-[#E9ECF0]">{icon}</div>}
            {children}
        </div>
    );
};

export default Card;
