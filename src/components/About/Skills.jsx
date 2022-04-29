import React from 'react'
import './Skills.css'

const frontendSkills = [
    {
        title: 'React.js',
        percentage: '70%'
    },
    {
        title: 'JavaScript',
        percentage: '65%'
    },
    {
        title: 'HTML',
        percentage: '80%'
    },
    {
        title: 'CSS',
        percentage: '75%'
    },
]

const codingSkills = [
    {
        title: 'C',
        percentage: '80%'
    },
    {
        title: 'C++',
        percentage: '80%'
    },
    {
        title: 'JAVA',
        percentage: '65%'
    },
]

const Skills = () => {
  return (<div className = 'skills_wrapper d-flex gap-5'>
     <div className='frontend_skill w-50'>
        {
            frontendSkills.map((item,index) =>(
                <SkillItem 
                key={index} 
                title = {item.title} 
                percentage = {item.percentage}/>
            ))
        }
     </div>
     <div className='coding_skill w-50'>
     {
         codingSkills.map((item,index) => (
            <SkillItem 
            key={index} 
            title = {item.title} 
            percentage = {item.percentage}/>
         ))
     }
     </div>
  </div>
  );
};

 const SkillItem = ({title, percentage}) =>{
     return(<div className='skill_data mb-3'>
     <div className='skill_title d-flex align-items-center justify-content-between'>
        <h6>{title}</h6>
        <span>{percentage}</span>
     </div>
     <div className='skill_bar'>
        <span className='skill_bar-percentage' 
        style={{width: `${percentage}`}}></span>
     </div>
  </div>)
 }
  

export default Skills