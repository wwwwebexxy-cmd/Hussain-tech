import { FaStar, FaDiamond } from 'react-icons/fa6';
import './Marqueebar.css';

const LOGO = '/assets/hussain-ahmad-logo-transparent.png';

const items = [
  { icon: 'diamond', text: 'Plaster Works' },
  { icon: 'star', text: 'Carpentry & Wood Flooring' },
  { icon: 'diamond', text: 'Air-Conditioning & Ventilation' },
  { icon: 'star', text: 'Electromechanical Installation & Maintenance' },
  { icon: 'diamond', text: 'Engraving & Ornamentation' },
  { icon: 'star', text: 'Floor & Wall Tiling' },
  { icon: 'diamond', text: 'Painting Contracting' },
  { icon: 'star', text: 'Plumbing & Sanitary Installation' },
  { icon: 'diamond', text: 'False Ceilings & Light Partitions' },
];

function MarqueeLap({ suffix = '' }) {
  return (
    <>
      <span className="marquee-logo-wrap">
        <img src={LOGO} alt="Hussain Ahmad Technical Services" className="marquee-logo" />
      </span>

      {items.map(({ icon, text }, i) => (
        <span key={`${suffix}-${i}`} className="marquee-item">
          {icon === 'star'
            ? <FaStar className="marquee-icon" />
            : <FaDiamond className="marquee-icon" />}
          {text}
        </span>
      ))}
    </>
  );
}

function MarqueeBar() {
  return (
    <div className="marquee-bar" aria-label="Technical services">
      <div className="marquee-track">
        <MarqueeLap suffix="a" />
        <MarqueeLap suffix="b" />
      </div>
    </div>
  );
}

export default MarqueeBar;
