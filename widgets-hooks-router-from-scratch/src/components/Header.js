import React from 'react';
import Link from './Link';

const Header = () => {
  return(
    <div className="ui secondary pointing menu"> 
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  )
}

export default Header;

/*
Ideal way that routing works:
1. user clicks on "list"
2. we change the url, dont don't do a full
page refresh
3. Each route can detect the URL has changed
4. Route could update piece of state tracking the
current pathname
5. Each route rerenders, showing/hiding
components appropriately


-we'll create a Link component
-when user clicks on Link, we build a
navigation event that communicates to 
all the routes that the link has changed
-and to show the respect child component

*/