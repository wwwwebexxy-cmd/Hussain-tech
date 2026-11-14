import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [servicesExpanded, setServicesExpanded] = useState(false);

    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src="/assets/hussain-ahmad-logo-transparent.png" alt="Hussain Ahmad Technical Services" className="footer-logo-img" />
                        </Link>
                        <p>Hussain Ahmad Technical Services LLC provides technical and maintenance solutions for residential and commercial clients in Dubai. Established in 2015.</p>
                    </div>

                    <div className="footer-top-grid">
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/products">Service Details</Link></li>
                                <li><a href="/#services">Services</a></li>
                                <li><a href="/#about">About Us</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/products">Plaster Works</Link></li>
                                <li><Link to="/products">Carpentry &amp; Wood Flooring</Link></li>
                                <li><Link to="/products">Air-Conditioning &amp; Ventilation</Link></li>
                                <li><Link to="/products">Electromechanical Installation &amp; Maintenance</Link></li>
                                <li><Link to="/products">Engraving &amp; Ornamentation</Link></li>
                            </ul>

                            {/* Collapsible extra services */}
                            <div className={`services-extra ${servicesExpanded ? 'services-extra--open' : ''}`}>
                                <ul>
                                    <li><Link to="/products">Floor &amp; Wall Tiling</Link></li>
                                    <li><Link to="/products">Painting Contracting</Link></li>
                                    <li><Link to="/products">Plumbing &amp; Sanitary Installation</Link></li>
                                    <li><Link to="/products">False Ceilings &amp; Light Partitions</Link></li>
                                </ul>
                            </div>

                            <button
                                className="services-toggle"
                                onClick={() => setServicesExpanded(prev => !prev)}
                                aria-label={servicesExpanded ? 'Show fewer services' : 'Show more services'}
                            >
                                {servicesExpanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                            </button>
                        </div>

                        <div className="footer-col">
                            <h4>Contact, Location &amp; Hours</h4>
                            <ul>
                                <li><a href="tel:+971558118429"><FaPhoneAlt size={14} /> +971 55 811 8429</a></li>
                                <li><span><FaMapMarkerAlt size={14} /> Al Quoz, Dubai, UAE</span></li>
                                <li><span><FaClock size={14} /> Weekdays: 8:30 AM – 5:00 PM</span></li>
                                <li><span>Residential &amp; commercial projects</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} Hussain Ahmad Technical Services LLC. All rights reserved.</p>
                        <p className="developer-credit">
                            Established in 2015 · Al Quoz, Dubai
                        </p>
                    </div>
                    <div className="social-links footer-contact-summary" aria-label="Business details">
                        <span><FaMapMarkerAlt size={15} /> Al Quoz, Dubai</span>
                        <span><FaClock size={15} /> Weekdays, 8:30 AM – 5:00 PM</span>
                    </div>
                </div>
            </div>
        </footer>
        <a
            className="floating-whatsapp"
            href="https://wa.me/971558118429"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            <FaWhatsapp aria-hidden="true" focusable="false" />
        </a>
        </>
    );
};

export default Footer;
