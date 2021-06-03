import { useEffect } from 'react';

const Route = ({path, children}) => {
  useEffect(() => {
    //this is saved in a variable so we can use it to 
    //clean up as well
    const onLocationChange = () => {
      console.log('Location change');
    }

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, []);//only run it once, when this component is first rendered

  return window.location.pathname === path ? children : null;
}

export default Route;