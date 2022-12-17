import { useInView } from 'react-intersection-observer'
import { Animator, Animation, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import NavB from "./components/NavBar";
import LandingSection from "./components/LandingSection"
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import s from "./App.module.css"

function App() { 
  const { ref: landingRef, inView: landingIsVisible } = useInView();
  const { ref: educationRef, inView: educationIsVisible } = useInView();
  const { ref: portfolioRef, inView: portfolioIsVisible } = useInView();
  const { ref: contactRef, inView: contactIsVisible } = useInView();

  const Spin = (cycle) =>
  ({
    in: {
      style: {
        // `p` is number (0~1)
        // When just before this page appear, `p` will be 0
        // When this page filled your screen, `p` will be 1
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
    out: {
      style: {
        // `p` is number (0~1)
        // When this page filled your screen, `p` will be 0
        // When just after this page disappear, `p` will be 1
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
  });

  return (
    <div className={s.app}>      
      <NavB />      
      <div ref={landingRef}  id="home">            
        <LandingSection />
      </div>
      <div ref={educationRef}>
        <Education />         
      </div>     
      <div ref={portfolioRef}>
        <Portfolio />   
      </div> 
      <div ref={contactRef}>
        {/* <ScrollContainer>
          <ScrollPage>
            <Animator >
              <Contact/>    
            </Animator>
          </ScrollPage>
        </ScrollContainer>         */}
        <Contact/>    
      </div> 
    </div>
  );
}

export default App;
