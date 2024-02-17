import React from 'react'

const OverlayFrame = ({ visible, onClose, children }) => {
  return (
    <>
      {visible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center"
          onClick={onClose}
        >
          {children}
        </div>
      )}
    </>
  )
}

export default OverlayFrame
