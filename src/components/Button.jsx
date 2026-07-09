import React from 'react';
import { MdCached } from 'react-icons/md'; 
export function SnakeBorderButton({ 
  text , 
  onClick,
  children,
  className = "",
  ...props 
}) {
  return (
    <button
      onClick={onClick}
      className={`hover:cursor-pointer  hover:bg-transparent group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-800 ${className}`}
      {...props}
    >
      {/* 
        The Multi-Color Moving Snake Layer:
        - Uses your Tailwind v4 'animate-border-spin' on hover.
      */}
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-border-spin transition-opacity duration-300"
        style={{ 
          
          background: 'conic-gradient(from 0deg, #ff007f, #7f00ff, #00f0ff, #ff007f)',
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
        }}
      />

      {/* Inner button layer masking the center background */}
      <span className="flex bg-slate-900 relative px-8 py-2.5 transition-all ease-in duration-120 rounded-md group-hover:bg-opacity-0">
         <MdCached  className='text-xl' /> {children || text}
      </span>
    </button>
  );
}

export default SnakeBorderButton;
