import React from 'react';
import { IconMail, IconBrandWhatsapp } from '@tabler/icons-react';
import parse from 'html-react-parser';



const Contact = (  ) => {
  
  return (
    <section className="section--contact ">
        <div className="section__content">
            <div className="heading">
                <h2 className="title">Get in touch</h2>
                <p className="caption">Feel free to <a className="button" href="mailto: kei@cckei.co" target="_blank" rel="noreferrer" style={{transform: "rotate(-3deg)", background: "black", color: "white"}}><IconMail size="24"/>email</a> me to <em>provide some feedback</em> on the works or <a className="button" href="https://wa.me/?phone=85257139429" target="_blank" rel="noreferrer" style={{transform: "rotate(4deg)", background: "#25D366", color: "white"}}><IconBrandWhatsapp size="24"/>whatsapp</a> me to just say hello!
                </p>
            </div>

            {/* <div className="info">
                <div className="item">
                    <span className="icon"><IconMail size="48"/></span>
                    <a className='link' href="mailto: info@cckei.co">info@cckei.co</a>
                </div>
                <div className="item">
                    <span className="icon"><IconBrandWhatsapp size="48"/>whatsapp</span>
                    <a className='link' target="_blank" href="https://wa.me/?phone=85267139429">+852 6713 9429</a>
                </div>
            </div> */}

        </div>
    </section>
  )
};

export default Contact;