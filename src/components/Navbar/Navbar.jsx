import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const navbarVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.08,
        },
    },
};

const navLinkVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            id="navbar"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="navbar-container">
                <motion.div variants={navLinkVariants}>
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <img src="/assets/hussain-ahmad-logo-transparent.webp" alt="Hussain Ahmad Technical Services" className="logo-img" />
                    </Link>
                </motion.div>

                <div className={`nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <motion.li variants={navLinkVariants}>
                        <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <a href="/#about" onClick={closeMenu}>About</a>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <a href="/#services" onClick={closeMenu}>Services</a>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <Link to="/products" className={isActive('/products')} onClick={closeMenu}>Service Details</Link>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <a href="/#contact" onClick={closeMenu}>Contact</a>
                    </motion.li>
                    <motion.li variants={navLinkVariants}>
                        <a href="/#contact" className="nav-cta" onClick={closeMenu}>
                            Discuss a Project
                        </a>
                    </motion.li>
                </ul>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
