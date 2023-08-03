"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import { parseISO, format } from "date-fns";
import "../styles/test2.css";
import { createClient } from "@supabase/supabase-js";


// Import the CSS file for styling

const Test2 = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const [isMobileView, setIsMobileView] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // useEffect for client-side rendering
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        // Initial check on component mount
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // useLayoutEffect for server-side rendering
    useLayoutEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        // Initial check on component mount
        handleResize();

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const submittedAt = new Date().toISOString(); // Get current date and time in ISO 8601 format

        try {
            const { data, error } = await supabase.from("subscribers").insert([
                { email, submitted_at: submittedAt },
            ]);

            if (error) {
                console.error("Error inserting email:", error);
            } else {
                console.log("Email inserted successfully:", data);
                // Show success message and clear the input
                setSubmitted(true);
                setEmail("");
            }
        } catch (error) {
            console.error("Error inserting email:", error);
        }
    };

    return (
        <div className="color-divs-container">
            <div className="color-div red">
                <div className="red-child red1">
                    <img className= "logo" src="assets\Logo.svg"alt='img'></img>
                </div>
                <div className="red-child red2">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white ">COMING SOON</h1>
                        <p className="mt-3 text-lg text-white text-s text-work-sans">ELEVATE YOUR FITNESS JOURNEY!</p>
                        <p className="mt-3 text-lg text-white text-s">The Future of Fitness at Your Fingertips</p>
                    </div>
                </div>
                {isMobileView ? (
                    <>

                        <div className="color-div blue">
                            {/* Conditional rendering for the image */}
                            {isMobileView ? (
                                <img
                                    className="display_image"
                                    src="/assets/mobile_mockup.png"
                                    alt="Mobile Image"
                                />
                            ) : (
                                <img
                                    className="display_image"
                                    src="/assets/display_mockup.png"
                                    alt="Desktop Image"
                                />
                            )}
                        </div>

                    </>
                ) : (
                    <>
                        <div className="red-child red">
                            {submitted ? (
                                <p className="mt-2 text-center text-green-500 ">
                                    Thank you! We will notify you when we launch.
                                </p>
                            ) : (
                                <div>
                                <form className="mx-auto max-w-xs" onSubmit={handleFormSubmit}>
                                    <div className="flex  items-center border-b border-cyan-500 rounded-md py-2 px-2  bg-[#494949] space-x-4">
                                        <input
                                            className="w-100 bg-[#494949] text-white border-none  py-2 border rounded-md focus:outline-none focus:[#494949]"
                                            type="text"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}/>
                                        <button
                                            className="w-40 h-30 bg-[#67e8f9] text-black  text-sm text-xs font-bold py-2 px-4 rounded-md hover:[#494949] transition duration-300"
                                            type="submit"
                                        >
                                            Notify me
                                        </button>
                                    </div>

                                </form><p className="mt-2 text-center text-gray-500 ">
                                We will notify you when we launch.
                                </p></div>
                            )}
                        </div>
                    </>
                )}
            </div>
            {/* Conditional rendering for the image */}
            {isMobileView ? (
                <div className="red-child red3">
                    {submitted ? (
                        <p className="mt-2 text-center text-green-500 ">
                            Thank you! We will notify you when we launch.
                        </p>
                    ) : (
                        <div>
                        <form className="mx-auto max-w-xs" onSubmit={handleFormSubmit}>
                            <div className="flex items-center border-b border-cyan-500 rounded-md py-2 px-2 bg-[#494949] space-x-4">
                                <input
                                    className="w-100 bg-[#494949] text-white border-none  py-2 border rounded-md focus:outline-none focus:[#494949]"
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                                <button
                                    className="w-40 h-30 bg-[#67e8f9] text-black  text-sm text-xs font-bold py-2 px-4 rounded-md hover:[#494949] transition duration-300"
                                    type="submit"
                                >
                                    Notify me
                                </button>
                            </div>

                        </form>
                        <p className="mt-2 text-center text-gray-500 ">
                        We will notify you when we launch.
                        </p></div>
                    )}

                </div>
            ) : (
                <div className="color-div blue">
                <img
                    className="display_image"
                    src="/assets/display_mockup.png"
                    alt="Desktop Image"
                />
                    </div>
            )}

            <div className="color-div green space-y-5">
                <div className="flex items-center justify-center gap-x-5 ">
                    <a href="" aria-label="Find us on LinkedIn"
                       target="_blank" rel="noopener">
                        <svg className="h-4 w-4 text-white" viewBox="0 0 48 48" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                                fill="currentColor"></path>
                        </svg>

                    </a>
                    <a href="" aria-label="Find us on Twitter" target="_blank" rel="noopener">
                        <svg className="h-4 w-4 text-white" viewBox="0 0 48 40" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.1 39.5c18.1 0 28.02-15 28.02-28.02 0-.42-.01-.85-.03-1.27A20 20 0 0 0 48 5.1c-1.8.8-3.7 1.32-5.65 1.55a9.9 9.9 0 0 0 4.33-5.45 19.8 19.8 0 0 1-6.25 2.4 9.86 9.86 0 0 0-16.8 8.97A27.97 27.97 0 0 1 3.36 2.3a9.86 9.86 0 0 0 3.04 13.14 9.86 9.86 0 0 1-4.46-1.23v.12A9.84 9.84 0 0 0 9.83 24c-1.45.4-2.97.45-4.44.17a9.87 9.87 0 0 0 9.2 6.84A19.75 19.75 0 0 1 0 35.08c4.5 2.89 9.75 4.42 15.1 4.42Z"
                                fill="currentColor"></path>
                        </svg>

                    </a>
                    <a href="" aria-label="Find us on Facebook" target="_blank"
                       rel="noopener">
                        <svg className="h-4 w-4 text-white" viewBox="0 0 48 48" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
                                fill="currentColor"></path>
                        </svg>

                    </a>
                    <a href="" aria-label="Find us on Instagram" target="_blank"
                       rel="noopener">
                        <svg className="h-4 w-4 text-white" viewBox="0 0 48 48" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                                fill="currentColor"></path>
                            <path
                                d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                                fill="currentColor"></path>
                        </svg>

                    </a>
                </div>
                <p className="text-center text-gray-300 font-medium text-xs">&copy; 2023 LUXONIK. All rights reservered.</p>
            </div>
        </div>
    );
};

export default Test2;
