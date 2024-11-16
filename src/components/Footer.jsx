import React from 'react'

const Footer = () => {
  return (
    <div>
       {/* Footer */}
       <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} NextUpdate. All rights reserved.
        </p>
        
      </footer>
    </div>
  )
}

export default Footer
