import React, { useState, useEffect }  from 'react';
import Typer from '@/components/typer'

const Landing = (  ) => {

  const [scrollTop, setScrollTop] = useState(0);
  const [sectionOffset, setSectionOffset] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const speed = 0.5;
    const offset = scrollTop * speed
    setSectionOffset(offset);
  }, [scrollTop]);

  return (
    <section className="section--intro page__section">
        <div className="section__content" style={{transform: `translateY(${sectionOffset}px)`}}>
            <div className="typer-container mb-10">
                <Typer />
            </div>
            <div className="">
                <h2 className="text">I'm a <span className="dot"></span> developer <span className="dot"></span> designer <span className="dot"></span> freelancer <span className="dot"></span> technologist. I collaborate with clients and peers to nurture and transform ideas into <span className="underline italic">well thought out design specs</span>. After all, that's where the majority of <span className="underline italic">amazing user experiences</span> start.</h2>
            </div>
        </div>
    </section>
  )
};

export default Landing;