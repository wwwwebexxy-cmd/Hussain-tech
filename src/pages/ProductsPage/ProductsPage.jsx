import React, { useEffect, useRef, useState } from 'react';
import { FaTools, FaHammer, FaFan, FaWrench, FaMagic, FaLayerGroup, FaPaintRoller, FaTint, FaBuilding, FaChevronDown } from 'react-icons/fa';
import './ProductsPage.css';
import { motion } from 'framer-motion';
import useSeo from '../../hooks/useSeo';

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
            { threshold: 0.12 }
        );
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));
        return () => elements?.forEach((el) => observer.unobserve(el));
    }, []);
    return ref;
};

const products = [
    {
        img: '/assets/hats-detail-plaster.webp',
        title: ['Plaster ', 'Works'],
        desc: 'Interior and exterior plaster work, with cladding in marble, granite, natural stone, tile and ceramic for walls and facades.',
        icon: <FaTools />,
        heading: 'Service Includes',
        points: ['Interior and exterior plaster finishes', 'Marble, granite and natural stone cladding', 'Tile and ceramic cladding', 'Residential and commercial surfaces'],
    },
    {
        img: '/assets/hats-detail-carpentry.webp',
        title: ['Carpentry & ', 'Wood Flooring'],
        desc: 'Flooring installation and interior woodwork, including custom wooden solutions for residential and commercial spaces.',
        icon: <FaHammer />,
        heading: 'Service Includes',
        points: ['Wood flooring installation', 'Custom interior woodwork', 'Decorative wood projects', 'Practical solutions for home and business interiors'],
        reverse: true,
    },
    {
        img: '/assets/hats-detail-air-conditioning.webp',
        title: ['Air-Conditioning & ', 'Ventilation'],
        desc: 'Installation and maintenance for air-conditioning, ventilation and air filtration systems across a range of building types.',
        icon: <FaFan />,
        heading: 'Service Includes',
        points: ['System fitting and reconditioning', 'Duct cleaning and maintenance', 'Fan repair and servicing', 'Air filtration and sterilizer installation'],
    },
    {
        img: '/assets/hats-detail-electromechanical.webp',
        title: ['Electromechanical ', 'Equipment'],
        desc: 'Installation and maintenance of electromechanical equipment used in workshops, factories and commercial facilities.',
        icon: <FaWrench />,
        heading: 'Service Includes',
        points: ['Workshop and factory machinery', 'Power generators and lifting equipment', 'Cold rooms and refrigeration units', 'Central kitchens and automatic laundry systems'],
        reverse: true,
    },
    {
        img: '/assets/hats-detail-engraving.webp',
        title: ['Engraving & ', 'Ornamentation'],
        desc: 'Engraving and ornamentation work for decorative architectural and interior finishes.',
        icon: <FaMagic />,
        heading: 'Service Includes',
        points: ['Decorative engraving work', 'Ornamental interior details', 'Finishing work for building projects', 'Residential and commercial applications'],
    },
    {
        img: '/assets/hats-detail-tiling.webp',
        title: ['Floor & Wall ', 'Tiling'],
        desc: 'Precise installation of ceramic, cement and natural stone tiles for floors and walls in different types of buildings.',
        icon: <FaLayerGroup />,
        heading: 'Service Includes',
        points: ['Ceramic tile installation', 'Cement tile installation', 'Natural stone tiling', 'Floor and wall surfaces'],
        reverse: true,
    },
    {
        img: '/assets/hats-detail-painting.webp',
        title: ['Painting ', 'Contracting'],
        desc: 'Painting contracting for residential and commercial properties.',
        icon: <FaPaintRoller />,
        heading: 'Service Includes',
        points: ['Painting contracting', 'Residential and commercial projects'],
    },
    {
        img: '/assets/hats-detail-plumbing.webp',
        title: ['Plumbing & ', 'Sanitary Installation'],
        desc: 'Installation and repair of water pipes, bathroom and kitchen fixtures, and drainage systems.',
        icon: <FaTint />,
        heading: 'Service Includes',
        points: ['Water pipes and supply fittings', 'Washbasins, bathtubs, lavatories and taps', 'Drainage and sewage system cleaning', 'High-pressure water jetting and flushing'],
        reverse: true,
    },
    {
        img: '/assets/hats-detail-ceiling-partitions.webp',
        title: ['False Ceilings & ', 'Light Partitions'],
        desc: 'False ceiling installation and light partitions that help divide and finish office and interior spaces.',
        icon: <FaBuilding />,
        heading: 'Service Includes',
        points: ['Wooden or metal light partitions', 'Office space division', 'False ceiling installation', 'Interior fit-out and space optimization'],
    },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2
    }
  }
};

const ProductsPage = () => {
    const pageRef = useReveal();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const siteOrigin = window.location.origin;
    const serviceSchemas = products.map((service) => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title.join(''),
        "serviceType": service.title.join(''),
        "image": `${siteOrigin}${service.img}`,
        "description": service.desc,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Hussain Ahmad Technical Services LLC",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Al Quoz",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
            }
        }
    }));

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "When was Hussain Ahmad Technical Services LLC established?",
                "acceptedAnswer": { "@type": "Answer", "text": "The company was established in 2015." }
            },
            {
                "@type": "Question",
                "name": "Who do you serve?",
                "acceptedAnswer": { "@type": "Answer", "text": "The company provides technical and maintenance services to residential and commercial clients." }
            },
            {
                "@type": "Question",
                "name": "What air-conditioning and ventilation work do you provide?",
                "acceptedAnswer": { "@type": "Answer", "text": "Services include installation and maintenance of air-conditioning, ventilation and air filtration systems, as well as duct cleaning, fan repair and air sterilizer installation." }
            },
            {
                "@type": "Question",
                "name": "Which materials are available for floor and wall tiling?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tiling work includes ceramic, cement and natural stone tiles." }
            },
            {
                "@type": "Question",
                "name": "Where are you based and what are your working hours?",
                "acceptedAnswer": { "@type": "Answer", "text": "The company is based in Al Quoz, Dubai, UAE, and operates on weekdays from 8:30 AM to 5:00 PM." }
            }
        ]
    };

    useSeo({
        title: "Hussain Ahmad Technical Services | Services in Dubai",
        description: "Explore air-conditioning, electromechanical, carpentry, tiling, painting, plumbing and fit-out services from Hussain Ahmad Technical Services LLC in Dubai.",
        ogType: "website",
        ogImage: `${siteOrigin}/assets/hussain-ahmad-logo.jpeg`,
        schemas: [...serviceSchemas, faqSchema]
    });

    const faqQuestions = faqSchema.mainEntity.map(item => ({
        q: item.name,
        a: item.acceptedAnswer.text
    }));

    const toggleFaq = (index) => {
        setOpenFaq(prev => (prev === index ? null : index));
    };

    return (
        <div ref={pageRef}>
            {/* ========== PAGE HERO ========== */}
            <section className="page-hero">
                <div className="container">
                    <motion.h1 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.2 }} 
                        variants={textVariants}
                    >
                        Our <span>Technical Services</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Explore technical, maintenance and fit-out services for residential and commercial projects in Dubai.
                    </motion.p>
                </div>
            </section>

            {/* ========== PRODUCT SECTIONS ========== */}
            {products.map((product, i) => (
                <section
                    className="product-section"
                    key={i}
                    style={product.reverse ? { background: 'var(--bg-secondary)' } : {}}
                >
                    <div className="container">
                        <div className={`product-layout ${product.reverse ? 'reverse' : ''}`}>
                            <motion.div 
                                className="product-image"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                            >
                                <img src={product.img} alt={product.title.join('')} />
                            </motion.div>
                            <div className="product-content">
                                <motion.h2 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={textVariants}
                                >
                                    {product.title[0]}<span>{product.title[1]}</span>
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 30 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    {product.desc}
                                </motion.p>
                                <motion.div 
                                    className="importance-box"
                                    initial={{ opacity: 0, y: 30 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <h4>{product.icon} {product.heading}</h4>
                                    <ul>
                                        {product.points.map((point, j) => (
                                            <motion.li 
                                                key={j}
                                                initial={{ opacity: 0, x: -10 }} 
                                                whileInView={{ opacity: 1, x: 0 }} 
                                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 + (j * 0.1) }}
                                                viewport={{ once: true, amount: 0.2 }}
                                            >
                                                {point}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ========== FAQ ACCORDION SECTION (AEO/SEO) ========== */}
            <section className="products-faq-section">
                <div className="container">
                    <div className="products-faq-eyebrow">
                        <span className="faq-eyebrow-line" />
                        <span className="faq-eyebrow-text">FAQ</span>
                        <span className="faq-eyebrow-line" />
                    </div>
                    <h2 className="products-faq-heading">Frequently Asked <em>Questions</em></h2>
                    <div className="products-faq-list">
                        {faqQuestions.map((item, i) => (
                            <div 
                                className={`products-faq-item ${openFaq === i ? 'active' : ''}`} 
                                key={i}
                            >
                                <button className="products-faq-question" onClick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
                                    <span>{item.q}</span>
                                    <FaChevronDown className="products-faq-icon" />
                                </button>
                                <div className="products-faq-answer">
                                    <div className="products-faq-answer-content">
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA BANNER ========== */}
            <section className="section">
                <div className="container">
                    <motion.div 
                        className="cta-banner"
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2>Planning a Technical Project?</h2>
                        <p>From MEP and maintenance to interior finishing, our team serves homes and commercial properties in Dubai.</p>
                        <a href="/#contact" className="btn-white">Discuss a Project</a>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
