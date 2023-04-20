import React from 'react'

const Footer = () => {
  let footerStyle={
    position:"relative",
    top:"70vh",
    width:"100%"

  }
  return (
    <footer className='bg-light text-dark'>
     <p className='py-3 text-center'>
     Copyright &copy; mytodoslist.com  
    </p> 
    </footer>
  )
}

export default Footer
