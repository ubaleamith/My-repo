import React,{Component} from 'react';
import Background from './aa.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};


class Home extends  Component
{
  render()
  {
    return (
      <div>

      <img  src={Background} style={{  width: "100%",  height: "400px"}}/>
<h1 align="center">WElCOME TO FORK</h1>

      </div>
    );
  }
}
 export default Home ;
