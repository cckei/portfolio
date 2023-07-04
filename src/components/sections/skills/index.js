import React, { useRef, useEffect, useState, useReducer } from 'react';
import {getRandomNum} from "@/scripts/Helper"

import reducer from '@/scripts/skillsReducer';

const Skills = () => {

    const SKILLS_STATE = {
        sectionHeight: null,
        scrollTop: null,
        windowSize: {},
        skillItems: [
            {text: "Web development"},
            {text: "CMS"},
            {text: "UI/UX"},
            {text: "AR experience"},
            {text: "React"},
            {text: "Next.js"},
            {text: "Vue"},
            {text: "Strapi"},
            {text: "Photoshop"},
            {text: "Adobe XD"},
            {text: "Figma"},
            {text: "Git"},
            {text: "Html"},
            {text: "css"},
            {text: "javascript"},
            {text: "seo"},
            {text: "H5 Banner"},
            {text: "EDM"},
            {text: "Instagram filter"},
            {text: "SparkAR"},
            {text: "8thWall"},
        ]
    }    

    const sectionRef = useRef(null);
    const [state, dispatch] = useReducer(reducer, SKILLS_STATE);
    
    const [reached, setReached] = useState(false);
    const [passed, setPassed] = useState(0);

    useEffect(()=>{
        const handleScroll = () => {
            dispatch({
                type: "SCROLLING", 
                payload: window.scrollY
            })
        }
        const handleResize = () =>{
            dispatch({
                type: "WINDOW_RESIZE",
                payload: {
                    sectionHeight: window.innerHeight  / state.skillItems.length,
                    windowSize: {x: window.innerWidth, y: window.innerHeight}
                }
            })
        }
        handleScroll();
        handleResize();
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize)
        };
    },[])

    useEffect(()=>{
        const itemPositioning = ()=>{
            const safeArea = (window.innerWidth < 768) ? 50 : 100;
            const arr = state.skillItems.map((elm)=>{
                const sources = {
                    x: getRandomNum(safeArea, window.innerWidth - safeArea),
                    y: getRandomNum(safeArea, window.innerHeight - safeArea),
                    rotate: getRandomNum(-15,15)
                }
                return Object.assign(elm, sources);
            })
            dispatch({
                type: "UPDATE_ITEMS",
                payload: arr
            });
        };
        itemPositioning();
    },[state.windowSize])

    useEffect(()=>{
        const triggerLine = state.scrollTop + (window.innerHeight*0);
        const section = sectionRef.current;
        const {offsetTop} = section;
        const distance = triggerLine - offsetTop;
        const offsetCount = Math.floor(distance/state.sectionHeight);

        setReached( distance >= 0 );
        setPassed( (distance-window.innerHeight > 0) ? distance-window.innerHeight : 0 );

        const newItems = state.skillItems.map((item,idx)=>{
            return Object.assign(item, {show: (idx <= offsetCount)});
        });
        dispatch({
            type: "UPDATE_ITEMS",
            payload: newItems
        })
    },[state.scrollTop])

    return (
        <section className="section--skills" ref={sectionRef}>
            <div className={`title-container ${ (reached) ? 'active': ''}`}
                style={{ transform: `translateY(${passed*-1}px)` }}
            >
                <h2 className="title">What I Know ?</h2>
            </div>
            <div className="spacers">
                {
                    state.skillItems.map((item,i)=>
                        <div className="spacer" key={i} style={{height: `${state.sectionHeight}px`}}></div>
                    )
                }
            </div>
            <div className={`items ${ (reached) ? 'active': ''}`}
                style={{ transform: `translateY(${passed*-1}px)` }}
            >        
                {
                    state.skillItems.map((item,i)=>
                        <span className="item-container" key={"skill_"+i} 
                            style={{ transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rotate}deg)` }}
                        >
                            <span className={`item item--skill ${item.show ? 'active': ''}`} >{item.text}</span>
                        </span>
                    )
                }
            </div>
        </section>
    )

}

export default Skills