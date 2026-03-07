import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Timelineitem from './components/Timelineitem'
import './Processsection.css'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Processsection = () => {
  const timelineData = [
    {
      step: "STEP ONE",
      number: 1,
      heading: "Meeting",
      image: "/assets/meeting.webp",
      description: "We get to know your vision, audience, and goals inside out \u2014 so every decision is backed by strategy, not guesswork."
    },
    {
      step: "STEP TWO",
      number: 2,
      heading: "Brainstorming",
      image: "/assets/brainstorming.webp",
      description: "We map out the structure, style, and user flow \u2014 combining design thinking with user psychology to maximize impact."
    },
    {
      step: "STEP THREE",
      number: 3,
      heading: "Design & Prototyping",
      image: "/assets/designing.webp",
      description: "You see and approve pixel-perfect designs before a single line of code is written \u2014 no surprises, no wasted time."
    },
    {
      step: "STEP FOUR",
      number: 4,
      heading: "Developing",
      image: "/assets/developing.webp",
      description: "We build it fast, clean, and responsive \u2014 then test rigorously until everything works flawlessly across every device."
    }
  ];

  useGSAP(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".process-timeline",
          start: "top 80%",
          end: "top 75%",
          scrub: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
        }
      });

    
      if (window.innerWidth >= 1024) {
        timeline.from(".timeline-progress-bar", {
          opacity: 0,
          height: "0%",
      });

      timelineData.forEach((item) => {
        gsap.from(`.ti-${item.number}`, {
          opacity: 0.4,
          duration: 0.1,
          scrollTrigger: {
            trigger: `.timeline-trigger-${item.number}`,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
          }
        });
      });
    }
  }, []);

  return (
    <section className="process-section" id="process">
      <div className="processsectionheading"><h2>HOW WE DELIVER</h2></div>
        <div className="process-timeline">
            <div className="timeline-progress">
                <div className="timeline-progress-bar"></div>
            </div>

            {timelineData.map((item, index) => (
                <Timelineitem 
                    key={index}
                    step={item.step}
                    number={item.number}
                    heading={item.heading}
                    image={item.image}
                    description={item.description}
                />
            ))}
        </div>
    </section>
  )
}

export default Processsection