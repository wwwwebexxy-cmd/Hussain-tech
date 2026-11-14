import React, { useEffect, useRef, useState } from 'react';
import {
    FaAward, FaShieldAlt,
    FaBolt, FaStar, FaMapMarkerAlt,
    FaClock,
} from 'react-icons/fa';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import MarqueeBar from '../../components/MarqueeBar/Marqueebar';
import useSeo from '../../hooks/useSeo';
import './HomePage.css';


const useReveal = () => {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.06 }
        );
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));
        return () => elements?.forEach((el) => observer.unobserve(el));
    }, []);
    return ref;
};

const CountUp = ({ target, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) { setCount(target); clearInterval(interval); }
                        else setCount(Math.floor(current));
                    }, 1800 / steps);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

/* tag field removed — badges no longer rendered */
const services = [
    { img: '/assets/hats-plaster.webp', title: 'Plaster Works', desc: 'Interior and exterior plaster finishes, with stone, tile and ceramic cladding.' },
    { img: '/assets/hats-carpentry-flooring.webp', title: 'Carpentry & Wood Flooring Works', desc: 'Flooring installation and custom woodwork for functional, well-finished interiors.' },
    { img: '/assets/hats-air-conditioning.webp', title: 'Air-Conditioning, Ventilation & Air Filtration', desc: 'Installation and maintenance of air-conditioning, ventilation, filtration and duct systems.' },
    { img: '/assets/hats-electromechanical.webp', title: 'Electromechanical Equipment Installation & Maintenance', desc: 'Installation and servicing for generators, cold rooms, refrigeration and commercial equipment.' },
    { img: '/assets/hats-engraving.webp', title: 'Engraving & Ornamentation Works', desc: 'Decorative engraving and ornamentation for architectural and interior details.' },
    { img: '/assets/hats-tiling.webp', title: 'Floor & Wall Tiling Works', desc: 'Careful installation of ceramic, cement and natural stone tiles for floors and walls.' },
    { img: '/assets/hats-painting.webp', title: 'Painting Contracting', desc: 'Painting work for residential and commercial properties.' },
    { img: '/assets/hats-plumbing.webp', title: 'Plumbing & Sanitary Installation', desc: 'Installation and repair of water supply, drainage, and bathroom and kitchen fixtures.' },
    { img: '/assets/hats-ceiling-partitions.webp', title: 'False Ceiling & Light Partitions', desc: 'False ceilings and light partitions to finish and optimize interior spaces.' },
];

const stats = [
    { num: 2015, suffix: '', label: 'Established' },
    { num: 9, suffix: '', label: 'Service Activities' },
    { num: 2, suffix: '', label: 'Client Sectors' },
    { num: 5, suffix: '', label: 'Weekdays Open' },
];

const features = [
    { icon: <FaAward />, label: 'Cost-Efficient Solutions', sub: 'Practical options for each project' },
    { icon: <FaShieldAlt />, label: 'Residential & Commercial', sub: 'Solutions for homes and businesses' },
    { icon: <FaBolt />, label: 'Prompt, Reliable Support', sub: 'Technical and maintenance services' },
    { icon: <FaStar />, label: 'Quality and Safety', sub: 'Health, safety and environmental standards' },
];

const HomePage = () => {
    const pageRef = useReveal();

    useEffect(() => {
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, []);

    const siteOrigin = window.location.origin;
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${siteOrigin}/#organization`,
        "name": "Hussain Ahmad Technical Services LLC",
        "legalName": "Hussain Ahmad Technical Services LLC",
        "logo": `${siteOrigin}/assets/hussain-ahmad-logo-transparent.png`,
        "image": `${siteOrigin}/assets/hats-about-project.webp`,
        "description": "Technical and maintenance services in Al Quoz, Dubai, for residential and commercial clients.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Al Quoz",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
        },
        "openingHours": "Mo-Fr 08:30-17:00"
    };

    useSeo({
        title: "Hussain Ahmad Technical Services | Dubai",
        description: "Hussain Ahmad Technical Services LLC provides air-conditioning, MEP, carpentry, tiling, painting, plumbing and fit-out services in Dubai.",
        ogType: "website",
        ogImage: `${siteOrigin}/assets/hussain-ahmad-logo-transparent.png`,
        schemas: [localBusinessSchema]
    });

    return (
        <div ref={pageRef} className="hp-root">

            <HeroSlider />
            <MarqueeBar />

            <section className="hp-stats">
                <div className="hp-stats-inner container">
                    {stats.map((s, i) => (
                        <div className="hp-stat reveal" key={i} style={{ '--delay': `${i * 0.1}s` }}>
                            <div className="hp-stat-num"><CountUp target={s.num} suffix={s.suffix} /></div>
                            <div className="hp-stat-bar" />
                            <div className="hp-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="hp-services section" id="services">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">What We Offer</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Our <em>Services</em></h2>

                    <div className="hp-services-grid">
                        {services.map((svc, i) => (
                            <div
                                className="hp-svc-card reveal"
                                key={i}
                                style={{ '--delay': `${(i % 5) * 0.07}s` }}
                            >
                                {/* No tag badge */}
                                <div className="hp-svc-img-wrap">
                                    <img src={svc.img} alt={svc.title} loading="lazy" />
                                    <div className="hp-svc-overlay" />
                                </div>
                                <div className="hp-svc-body">
                                    <h3 className="hp-svc-title">{svc.title}</h3>
                                    <p className="hp-svc-desc">{svc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hp-about section" id="about">
                <div className="hp-about-slash" aria-hidden="true" />
                <div className="container hp-about-grid">
                    <div className="hp-about-visual reveal">
                        <div className="hp-about-img-frame">
                            <img src="/assets/hats-about-project.webp" alt="Finished residential and commercial interior project" />
                        </div>
                    </div>
                    <div className="hp-about-text reveal">
                        <div className="hp-section-eyebrow hp-eyebrow-left">
                            <span className="hp-eyebrow-line" />
                            <span className="hp-eyebrow-text">About Hussain Ahmad Technical Services</span>
                        </div>
                        <h2 className="hp-section-heading">
                            Reliable Technical<br /><em>Services in Dubai</em><br />Since 2015
                        </h2>
                        <p>
                            Established in 2015, Hussain Ahmad Technical Services LLC provides
                            technical and maintenance solutions from Al Quoz, Dubai, for residential
                            and commercial clients.
                        </p>
                        <p>
                            From MEP and air-conditioning to carpentry, flooring and fit-out work,
                            the team focuses on prompt support, cost-efficient solutions, and high
                            quality, health, safety and environmental standards.
                        </p>
                        <div className="hp-features-grid">
                            {features.map((f, i) => (
                                <div className="hp-feature reveal" key={i} style={{ '--delay': `${i * 0.08}s` }}>
                                    <div className="hp-feature-icon">{f.icon}</div>
                                    <div>
                                        <strong>{f.label}</strong>
                                        <span>{f.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hp-contact section" id="contact">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">Get In Touch</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Technical Services <em>in Al Quoz, Dubai</em></h2>
                    <div className="hp-contact-layout">
                        <div className="hp-contact-cards reveal">
                            {[
                                {
                                    icon: <FaMapMarkerAlt />, title: 'Location',
                                    lines: ['Al Quoz, Dubai','United Arab Emirates'],
                                },
                                {
                                    icon: <FaClock />, title: 'Working Hours',
                                    lines: ['Weekdays','8:30 AM – 5:00 PM'],
                                },
                                {
                                    icon: <FaShieldAlt />, title: 'Project Types',
                                    lines: ['Residential technical works','Commercial maintenance'],
                                },
                                {
                                    icon: <FaAward />, title: 'Our Approach',
                                    lines: ['Cost-efficient solutions','Quality, health, safety and environmental standards'],
                                },
                            ].map((item, i) => (
                                <div className="hp-contact-card" key={i}>
                                    <div className="hp-contact-card-icon">{item.icon}</div>
                                    <div className="hp-contact-card-body">
                                        <h4>{item.title}</h4>
                                        {item.lines?.map((l, j) => <p key={j}>{l}</p>)}
                                        {item.links?.map((l, j) => <p key={j}><a href={l.href}>{l.label}</a></p>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hp-map reveal">
                            <iframe
                                src="https://maps.google.com/maps?q=Al%20Quoz%2C%20Dubai&output=embed"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Al Quoz, Dubai location map"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
