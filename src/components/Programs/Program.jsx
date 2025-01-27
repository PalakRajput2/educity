/* eslint-disable no-unused-vars */
import React from 'react'
import "./Program.css"
import program1 from "../../assets/program1.jpeg"
import program2 from "../../assets/program2.jpg"
import program3 from "../../assets/program4.jpg"
import graduation from "../../assets/graduate-icon.jpg"
import master from "../../assets/master-icon.jpg"
import pgraduation from "../../assets/pimage.png"


const Program = () => {
  return (
    <>
    
    <div className='programs'>
       
       
        <div className="program">
            <img src={program1}/>
            <div className="caption">
                <img src={graduation}/>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2}/>
            <div className="caption">
                <img src={master}/>
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3}/>
            <div className="caption">
                <img src={pgraduation}/>
                <p>Post Graduation Degree</p>
            </div>
        </div>
    </div>
    </>
  )

}

export default Program