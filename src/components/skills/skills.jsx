import React from 'react'
import './skills.css';
import cpp from '../../assets/cpp.png';
import c from '../../assets/c.png';
import css from '../../assets/css3.png';
import js from '../../assets/js.png';
import node from '../../assets/noode.png';
import html from '../../assets/html.png';
import solidity from '../../assets/solidity.png';
import git from '../../assets/git.png';
import tailwind from '../../assets/tailwind.png';
import react from '../../assets/react.png';
const Skills = () => {
     const skill=[
        {
         name:'C',
         border:'#a9b9cb',
         image:c
        },
        {
         name:"CSS3", 
         border:'#264de4',
         image:css
        },
        {
         name:"C++",
         border:'#1a4674',
         image:cpp
        },
       
        {
         name:"JAVASCRIPT",
         border:'#f7df1e',
         image:js
        },
        {
         name:"REACT",
         border:'#61dafb',
         image:react
        },
        {
         name:"NODE JS",
         border:'#549e42',
         image:node
        },
        {
         name:"SOLIDITY",
         border:'#06060b',
         image:solidity
        },
        {
         name:"GIT",
         border:'red',
         image:git
        },
        {
         name:"TAILWIND CSS",
         border:'#16beb8',
         image:tailwind
        }
        
    ]
  return (
   <>
<section className='skills' id='skills'>
<h5>Technologies I have worked with</h5>
      <h2>Skills</h2>
      <div className='skills_container'>
    {
        skill.map(({name,border,image},index)=>{
 return <div key={index} className='skill_box' style={{boxShadow:`${border} 0px 2px 5px 1px `}}>
    <img className="skill_img" src={image} alt="pic"></img>
    <p className='skill_name'>{name}</p>
 </div>
        })
    }
    </div>
</section>
   </>
    
  )
}

export default Skills