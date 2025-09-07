"use client";

import React, { useState } from "react";
import { Description, Title } from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone, Mail, Loader2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollAnimationWrapper } from "@/components/animations/ScrollAnimationWrapper";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const Page = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message:
                        "Thank you! Your message has been sent successfully.",
                });
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                setSubmitStatus({
                    type: "error",
                    message:
                        data.error || "Something went wrong. Please try again.",
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message:
                    "Network error. Please check your connection and try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen">
            <Container>
                <div className="my-20">
                    {/* Contact Us Header */}
                    <ScrollAnimationWrapper>
                        <Title className="font-normal lg:text-5xl text-blue-950 mb-16">
                            Contact Us
                        </Title>
                    </ScrollAnimationWrapper>

                    {/* Main Contact Section */}
                    <ScrollAnimationWrapper>
                        <div className="flex flex-col md:flex-row gap-10 mb-20 items-start">
                            {/* Get in Touch Section */}
                            <Card className="max-w-none w-full md:w-1/2 p-8 shadow-lg">
                                <div className="w-full flex flex-col gap-6">
                                    <Title className="text-2xl lg:text-3xl font-medium text-blue-950">
                                        Get in Touch
                                    </Title>
                                    <Description className="text-base lg:text-lg text-gray-700 font-normal leading-relaxed mb-6">
                                        Have questions about our solutions? Want
                                        to schedule a consultation? Fill out the
                                        form and our team will get back to you
                                        shortly.
                                    </Description>

                                    {/* Contact Information */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-950 p-2 rounded-lg">
                                                <Phone className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600">
                                                    Phone Number
                                                </div>
                                                <div className="text-base font-medium text-gray-800">
                                                    +32 499 712 725
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-950 p-2 rounded-lg">
                                                <Mail className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600">
                                                    Email
                                                </div>
                                                <div className="text-base font-medium text-gray-800">
                                                    kevalai24@gmail.com
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Contact Image */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <Image
                                    src="https://images.unsplash.com/photo-1681505526188-b05e68c77582?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Contact us illustration"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                        {/* Send Message Section */}
                        <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
                            {/* Contact Form */}
                            <div className="w-full md:w-1/2">
                                <Card className="max-w-none p-8 shadow-lg">
                                    <Title className="text-2xl lg:text-3xl font-medium text-blue-950 mb-6">
                                        Send Us a Message
                                    </Title>

                                    {/* Status Messages */}
                                    {submitStatus.type && (
                                        <div
                                            className={`p-4 rounded-lg mb-6 ${
                                                submitStatus.type === "success"
                                                    ? "bg-green-50 text-green-800 border border-green-200"
                                                    : "bg-red-50 text-red-800 border border-red-200"
                                            }`}
                                        >
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    <form
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-4"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    placeholder="John"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    placeholder="Doe"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="johndoe@gmail.com"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+32 456-7890"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                                Your Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={4}
                                                placeholder="Tell us about your project or ask any questions..."
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-blue-950 hover:bg-blue-900 text-white text-base px-6 py-3 rounded-lg shadow-lg transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <ArrowUpRight className="w-4 h-4 ml-2" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </Card>
                            </div>

                            {/* Message Image */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <Image
                                    src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Send message illustration"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover"
                                />
                            </div>
                        </div>{" "}
                    </ScrollAnimationWrapper>
                </div>
            </Container>
        </div>
    );
};

export default Page;
