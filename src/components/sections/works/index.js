import React, { useContext, useState, useEffect } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Context } from "@/scripts/context";

import Data from "@/scripts/data"

const Works = (  ) => {

  const [state, dispatch] = useContext(Context);
  const [hoverWork, setHoverWork] = useState();
  const [ready, setReady] = useState(false);
  const [randomColor, setRandomColor] = useState();
  const [screenX, setScreenX] = useState();
  const [screenY, setScreenY] = useState();
  const router = useRouter()
  const [works, setWorks] = useState([]);

  const getRandomColor = () =>{
    function randomIndex(_length){
        return Math.floor(Math.random() * _length);
    }
    const arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    const num1 = arr[randomIndex(arr.length)].toString(),
          num2 = arr[randomIndex(arr.length)].toString(),
          num3 = arr[randomIndex(arr.length)].toString();
    const set1 = num1 + num1,
          set2 = num2 + num2,
          set3 = num3 + num3;
    return `#${set1}${set2}${set3}`;
  }

  const mouseEnter = (work) =>{
    setHoverWork(work);
  }
  const mouseLeave = () =>{
    setHoverWork(null);
  }
  const mouseMove = (e) =>{
    setReady(true);
    setScreenX(e.clientX);
    setScreenY(e.clientY);
  }

  useEffect(() => {
    setWorks(Data)
  }, []);

  useEffect(() => {
    setRandomColor(getRandomColor());
  }, [hoverWork]);

  useEffect(()=>{
    const showWorkByquery = () => {
      if(router.query.work){
        const id = router.query.work;
        const work = works.filter(item=>item.id == id)[0];
        dispatch({
          type: "SHOW_WORK",
          payload: work
        });
      }
    }
    showWorkByquery();
  }, [works])

  const fetchData = async () => {
    const res = await fetch("/api/work", {
      method: "GET",
    });
    return res.json();
  };

  const showWork = (work) => {
    router.push(`/?work=${work.id}`, undefined, { shallow: false, scroll: false })
    dispatch({
      type: "SHOW_WORK",
      payload: work
    });
  };

  

  const myLoader = ({ src, width, quality }) => {
    return `./${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <section className="section--works ">
        <div className="section__content">


            <div className={`overlay-work ${hoverWork && ready ?'active': ''}`} 
                style={{
                    transform: `translateX(${screenX}px) translateY(${screenY}px)`,
                }}>
                { (hoverWork && hoverWork.coverImg) && 
                    <Image loader={myLoader} src={hoverWork.coverImg} alt="" width={300} height={300} style={{
                        boxShadow: `8px 8px 0px ${randomColor}`
                    }}/>
                }
            </div>


            <div className="row-content">
                <div className="col-title">
                    <h2 className="title">Works</h2>
                </div>
                <div className="col-content">
                    <div className="work-items">
                        <div className="row row--head">
                            <div className="cell cell--client">Client</div>
                            <div className="cell">Year of Work</div>
                            <div className="cell">Agency</div>
                        </div>
                        {works.map((work, i) => 
                            <a onMouseMove={mouseMove} onMouseEnter={()=>mouseEnter(work)} onMouseLeave={()=>mouseLeave()} className="row" key={i} onClick={()=> showWork(work)}>
                                <div className="cell cell--client">{work.client}</div>
                                <div className="cell">{work.year}</div>
                                <div className="cell">{work.agency}</div>
                            </a>
                        )}
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
};

export default Works;