import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Avatar = () => {
    return (
        <div className="flex justify-between items-center  max-w-sm ">
            <div className="flex gap-0 ">
                <div className="aspect-square w-16 rounded-full p-1 overflow-hidden mt-4">
                    <div className="w-full h-full rounded-full">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Avatar"
                            height={100}
                            width={100}
                            className="rounded-full "
                        />
                    </div>
                </div>
                <div className="aspect-square -translate-x-5 w-16 bg-white rounded-full p-1 overflow-hidden mt-4">
                    <div className="w-full h-full rounded-full">
                        <img
                            src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Avatar"
                            height={100}
                            width={100}
                            className="rounded-full "
                        />
                    </div>{" "}
                </div>
                <div className="aspect-square w-16 -translate-x-10 rounded-full p-1 bg-white overflow-hidden mt-4">
                    <div className="w-full h-full rounded-full">
                        <img
                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Avatar"
                            height={100}
                            width={100}
                            className="rounded-full "
                        />
                    </div>{" "}
                </div>
                <div className="aspect-square w-16 -translate-x-15 rounded-full p-1 bg-white overflow-hidden mt-4">
                    <div className="w-full h-full rounded-full">
                        <img
                            src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
                            alt="Avatar"
                            height={100}
                            width={100}
                            className="rounded-full "
                        />
                    </div>{" "}
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-3">
                <div className="flex justify-center items-center gap-1 -translate-x-10">
                    <Star className="text-yellow-500" fill="currentColor" />
                    <Star className="text-yellow-500" fill="currentColor" />
                    <Star className="text-yellow-500" fill="currentColor" />
                    <Star className="text-yellow-500" fill="currentColor" />
                    <Star className="text-yellow-500" fill="currentColor" />
                </div>
                <p className="text-md text-shadow-gray-400 ml-3 -translate-x-10">
                    4.9/5
                </p>
            </div>
        </div>
    );
};

export default Avatar;
