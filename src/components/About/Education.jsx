import React from 'react'
import './Education.css';

const Education = () => {
  return <table className='table'>
     <thead>
       <tr>
         <th>Degree</th>
         <th>Department</th>
         <th>Institute</th>
         <th>Year</th>
       </tr>
     </thead>
     <tbody className='table_body'>
       <tr>
          <td>MCA</td>
          <td>Computer Science</td>
          <td>C-DAC</td>
          <td>2020-2022</td>
       </tr>
       <tr>
          <td>BCA</td>
          <td>Computer Science</td>
          <td>Microtek College of Management & Technology</td>
          <td>2017-2020</td>
       </tr>
       <tr>
          <td>Intermediate</td>
          <td>Mathematics</td>
          <td>Sri Suresh Inter College</td>
          <td>2014-2016</td>
       </tr>
       <tr>
          <td>High school</td>
          <td>Ganeral</td>
          <td>Mahatma J. F. public school</td>
          <td>2011-2013</td>
       </tr>
     </tbody>
  </table>
}

export default Education