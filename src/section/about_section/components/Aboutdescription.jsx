/* eslint-disable react/no-unescaped-entities */
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Aboutdescription = () => {
  useGSAP(() => {
    if (window.innerWidth > 1024) {
      const splitTypes = document.querySelectorAll('.about-description')

      splitTypes.forEach((char) => {
          const text = new SplitType(char, { types: 'words'})

          gsap.fromTo(text.words, 
              {
                  opacity: 0.3
              },
              {
                  opacity:1,
                  duration: 4,
                  stagger: 0.1,
                  scrollTrigger: {
                      trigger: char,
                      start: 'top 80%',
                      end: 'top 20%',
                      scrub: true,
                      toggleActions: 'play play reverse reverse'
                  }
          })
      })
    }
  })

  return (
    <div className="about-description">
                    <ol>
                        <li>We build <span className="about-light-blue">visually unique</span> digital products with intuitive <span className="about-light-blue">interfaces</span> — designed to leave a lasting impression on every user.</li>
                        <li>Everything we build loads <span className="about-purple">fast</span> and runs <span className="about-purple">efficiently</span> — because performance isn't a feature, it's the foundation.</li>
                        <li>We bake in <span className="about-yellow">SEO</span> and discoverability from day one — so the right people find you without paid ads, boosting your <span className="about-yellow">reach</span> organically.</li>
                        <li>You get a <span className="about-orange">premium</span> product with a transparent process — and pricing that makes the decision easy.</li>
                    </ol>
    </div>
  )
}

export default Aboutdescription
