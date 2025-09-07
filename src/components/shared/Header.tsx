"use client";
import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="sticky top-0 bg-secondary z-50 shadow-sm">
            <Container>
                <div className="flex justify-between items-center py-4">
                    <div className="flex justify-center items-center gap-10 ">
                        {/* Logo */}
                        <Link href="/" passHref>
                            <div className="text-3xl font-bold text-primary">
                                KevalAI
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex justify-between items-center gap-10">
                            <nav>
                                <ul className="list-none flex gap-6">
                                    <Link href="/" passHref>
                                        <li className="hover:text-primary/70 transition-colors cursor-pointer">
                                            Home
                                        </li>
                                    </Link>
                                    <Link href="/about" passHref>
                                        <li className="hover:text-primary/70 transition-colors cursor-pointer">
                                            About
                                        </li>
                                    </Link>
                                    <Link href="/services" passHref>
                                        <li className="hover:text-primary/70 transition-colors cursor-pointer">
                                            Services
                                        </li>
                                    </Link>
                                    <Link href="/contact" passHref>
                                        <li className="hover:text-primary/70 transition-colors cursor-pointer">
                                            Contact
                                        </li>
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Desktop Get Started Button */}
                    <div className="hidden md:block">
                        <Link href="/contact" passHref>
                            <Button>
                                Get Started <ArrowUpRight />
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-primary hover:text-primary/70 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" passHref>
                                <div
                                    className="text-primary hover:text-primary/70 transition-colors py-2 cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </div>
                            </Link>
                            <Link href="/about" passHref>
                                <div
                                    className="text-primary hover:text-primary/70 transition-colors py-2 cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </div>
                            </Link>
                            <Link href="/services" passHref>
                                <div
                                    className="text-primary hover:text-primary/70 transition-colors py-2 cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Services
                                </div>
                            </Link>
                            <Link href="/contact" passHref>
                                <div
                                    className="text-primary hover:text-primary/70 transition-colors py-2 cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </div>
                            </Link>
                            <div className="pt-2">
                                <Link href="/contact" passHref>
                                    <Button
                                        className="w-full"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get Started <ArrowUpRight />
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Header;
