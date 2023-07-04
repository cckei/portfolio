import React, { useContext } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Context } from "@/scripts/context";
import parse from 'html-react-parser';

import CreditTable from "./creditTable.js"
import WorkVideo from "./video.js"
import WorkGif from "./gif.js"


const WorkPopup = () => {
  const [state, dispatch] = useContext(Context);
  const router = useRouter()

  const currentWork = state.workDetails.info;
  const myLoader = ({ src, width, quality }) => {
    return `./${src}?w=${width}&q=${quality || 75}`
  }


  const mediaComponent = {
    element: function element(){
      if(!currentWork.media && !currentWork.coverImg) return '';
      if(currentWork.media){
        if(currentWork.media.type == 'image'){
          return <div className="static"><Image loader={myLoader} src={currentWork.media.url} alt={currentWork.client} width={960} height={960} /></div>
        }
        if(currentWork.media.type == 'video'){
          return <div className={ (currentWork.media.orientation == 'vertical')? "vdo--vertical":"vdo"}><WorkVideo url={currentWork.media.url} /></div>
        }
        if(currentWork.media.type == 'gif'){
          return <WorkGif url={currentWork.media.url}/>
        }
      }
      return <div className="static"><Image loader={myLoader} src={currentWork.coverImg} alt={currentWork.client} width={960} height={960} /></div>
    }
  }

  const closePopup = () =>{
    router.push(`/`, undefined, { shallow: false, scroll: false })
    dispatch({
      type: "HIDE_WORK",
      payload: ""
    })
  }
  
  return (
    <div className={`popup-workdetails ${state.workDetails.isShowing ? 'active': ''}`}>
        <div className="popup-workdetails-wrapper">
          <a className="btn-back" onClick={()=>closePopup()}>
            <span className="arrow-head"></span>
            <span className="line"></span>
          </a>
          <div className="row-content">
            <div className="col-cover">
              <h1 className="title">{currentWork.title}</h1>
              <div className="mediaContainer">
                <mediaComponent.element />
              </div>
            </div>
            <div className="col-details">
              <div className="top">
                { currentWork.desc && 
                  parse(currentWork.desc)
                }
              </div>
              <div className="bottom">
                <CreditTable currentWork={currentWork} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default WorkPopup;