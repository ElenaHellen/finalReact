import React, { useState } from "react";
import ContentBlock from "../components/home";
import {RESPONSE} from "../helpers";
import {FILMLIST} from "../helpers"
import { connect } from "react-redux";


const HomeContainer = () => {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 1,
        },
      };   

      const { results } = FILMLIST;
      const [state, setState] = useState(results)

      const onReady = (event) => {
        event.target.pauseVideo();
    }
    
      const handleOnChange = (e) =>
      {
        let searchFilms = results.filter((film) => {
          return film.title.includes(e.target.value);       
        }) 
        setState(searchFilms)
        console.log(e.target.value)
        console.log(searchFilms)
      }
      
  return <ContentBlock 
  content={RESPONSE} 
  opts={opts} 
  onReady={onReady} 
  handleOnChange={handleOnChange}
  state = {state}
  />;
};

const mapStateToProps = (state) => {
  console.log(state)
  return { 
    data: state,
  }

}
export default connect (mapStateToProps)(HomeContainer);