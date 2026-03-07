import { useState } from 'react';
import Servicecard from './components/Servicecard';
import MobileServiceSection from './components/MobileServiceSection';
import './Servicesection.css';

const CARD_DATA = [
  { 
    id: 1, 
    title: 'Web Development', 
    content: "We develop fast, responsive websites that rank well and deliver real results — built on the platform that fits your needs perfectly.",
    image: '/assets/web-development-service.webp'
  },
  { 
    id: 2, 
    title: 'UI/UX Design', 
    content: 'Designs that look stunning and work even better. Every layout, button, and flow is crafted to guide your users toward action.',
    image: '/assets/web-design-service.webp'
  },
  { 
    id: 3, 
    title: 'App Development', 
    content: 'Native iOS and Android apps built to keep your users engaged — with clean UX that drives retention and growth.',
    image: '/assets/web-development-service.webp'
  }
];

const Servicesection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(0);
  };

  return (
    <section className='servicesection' id='services'>
      <h2 className="servicesectionheading">WHAT WE BUILD</h2>
      <div className="services-section-container">
        {CARD_DATA.map((card, index) => (
          <Servicecard
            key={card.id}
            title={card.title}
            content={card.content}
            image={card.image}
            isActive={index === activeCard}
            onHover={() => handleCardHover(index)}
            onLeave={handleCardLeave}
          />
        ))}
      </div>
      <MobileServiceSection cardData={CARD_DATA} />
    </section>
  );
}

export default Servicesection;
