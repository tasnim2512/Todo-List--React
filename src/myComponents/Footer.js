import React from 'react'

export default function Footer() {
  let FooterStyle = {
    top: "70vh",
    borderTop: "2px solid blue"
  }
  return (
    <div className='bg-gray-600 py-6 relative w-full text-white' style={FooterStyle}>
      Copyright &copy; Mytodolist.com
    </div>
  )
}
