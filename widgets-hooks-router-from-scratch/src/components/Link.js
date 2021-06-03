import React from 'react';

const Link = ({ className, href, children}) => {
  const onClick = (event) => {
    event.preventDefault();
    //updates the url
    window.history.pushState({}, '', href)

    //this communicates to the Route component that the url 
    //has just changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);

  };

  return(
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  )
}

export default Link;