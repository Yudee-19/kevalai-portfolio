import React from "react";
import Container from "../ui/Container";
import { Title } from "../ui/Title";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" w-full bg-black/5 py-7">
            <Container className="flex flex-col justify-center items-center gap-5">
                <div className="w-full flex sm:flex-row flex-col justify-start items-start gap-14">
                    <Title className="text-blue-950 lg:text-4xl font-bold mb-10">
                        KevalAI
                    </Title>

                    <div className="flex sm:flex-row flex-col justify-center items-start gap-14">
                        {/* Vertical separator line */}
                        <div className="w-1 h-50 hidden sm:block   border-l border-black/10"></div>

                        {/* Quick Links Section */}
                        <div className="flex flex-col justify-start items-start gap-3.5">
                            <div className="text-black/75 text-base font-medium ">
                                Quick Links
                            </div>
                            <Link href="/home">
                                <div className="text-black/75 text-base font-light leading-snug">
                                    Home
                                </div>
                            </Link>
                            <Link href="/about">
                                <div className="text-black/75 text-base font-light leading-snug">
                                    About Us
                                </div>
                            </Link>
                            <Link href="/services">
                                <div className="text-black/75 text-base font-light leading-snug">
                                    Services
                                </div>
                            </Link>
                            <Link href="/contact">
                                <div className="text-black/75 text-base font-light leading-snug">
                                    Contact Us
                                </div>
                            </Link>
                        </div>

                        {/* Vertical separator line */}
                        <div className="w-1 h-50 hidden sm:block   border-l border-black/10"></div>

                        {/* Follow Us Section */}
                        <div className="flex flex-col justify-start items-start gap-3.5">
                            <div className="text-black/75 text-base font-medium">
                                Follow Us
                            </div>
                            <div className="flex justify-start items-center gap-2.5">
                                <Facebook className="w-5 h-5 text-black" />
                                <Instagram className="w-5 h-5 text-black" />
                                <Linkedin className="w-5 h-5 text-black" />
                                <Twitter className="w-5 h-5 text-black" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom divider line */}
                <div className="w-full h-px bg-black/10"></div>

                {/* Copyright section */}
                <div className="flex justify-center items-center gap-5">
                    <div className="text-black/75 text-base font-normal leading-snug">
                        © 2025 KevalAI
                    </div>
                    <div className="text-black/75 text-base font-normal  leading-snug">
                        Privacy
                    </div>
                    <div className="text-black/75 text-base font-normal  leading-snug">
                        Terms
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
