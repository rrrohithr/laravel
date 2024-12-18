import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Header from '@/Components/Header';
import SideBar from '@/Components/SideBar';
import Footer from '@/Components/Footer';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-sscreen bg-gray-100">
            <Header></Header>
            <SideBar></SideBar>
            <main id="main" className="main">{children}</main>
            <Footer></Footer>
        </div>
    );
}
