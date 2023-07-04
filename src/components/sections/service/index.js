import React, { useEffect, useState } from 'react';
import ServiceCanvas from '@/components/serviceCanvas'

const Service = (  ) => {

    const getRandomNum = () =>{
        const min = -5;
        const max = 5;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [items, setItems] = useState([]);

    useEffect(()=>{
        const _items = [
            {text: "Web development", rotate: getRandomNum()},
            {text: "CMS", rotate: getRandomNum()},
            {text: "UI/UX", rotate: getRandomNum()},
            {text: "AR experience", rotate: getRandomNum()},
            {text: "React", rotate: getRandomNum()},
            {text: "Next.js", rotate: getRandomNum()},
            {text: "Vue", rotate: getRandomNum()},
            {text: "Strapi", rotate: getRandomNum()},
        ];
        setItems(_items);
    },[])


    return (
        <section className="section--service page__section">
            <div className="canvas-container">
                <ServiceCanvas />
            </div>
            <div className="card">
                ... some <br />interesting <br />projects
            </div>
            <div className="section__content">
                <h2 className="title mb-5">Service and Capabilities</h2>
                <ul>
                    {
                        items.map((item,i)=>
                            <li key={i} style={{transform: `rotate(${item.rotate}deg)`}}>
                                <span className="text">{item.text}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
};

export default Service;