import React from 'react'
import resume from '../../Assets/Resume.pdf'

const Button = () => {
  return (
    <div className='cta'>
        <a href={resume} target='_blanc' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Button