"use client";

import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";


const NonDashboardNavbar = () => {
    return (
        <nav className="nondashboard-navbar">
            <div className="nondashboard-navbar__container">
                <div className="nondashboard-navbar__search">
                    <Link href="/" className="nondashboard-navbar__brand">
                        EDROH
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className=" relative group">
                            <Link href="/search" className="nondashboard-navbar__search-input">
                                <span className="hidden sm:inline"> Search Course</span>
                                <span className="sm:hidden"> Search</span>
                            </Link>
                            <BookOpen
                                className="nondashboard-navbar__search-icon"
                            ></BookOpen>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nondashboard-navbar__actions">
                <button className="nondashboard-navbar__notifications-button">
                    <span className="nondashboard-navbar__notifications-indicator"></span>
                    <Bell className="nondashboard-navbar__notifications-icon" />
                </button>
                {/* SIgn in Button */}
            </div>
        </nav >
    )
};

export default NonDashboardNavbar;
