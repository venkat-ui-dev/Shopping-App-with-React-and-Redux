import React from 'react'

export const Button = ({children, textOnly, className, ...props}:any) => {
  let buttonClass = textOnly ? 'text-button' : 'button';

  // buttonClass += ' ' + className;

  return (
    <button className={buttonClass} {...props}>{children}</button>
  )
}
