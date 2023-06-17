import React, { useState, useEffect ,useRef } from "react";
import PropTypes from 'prop-types';
// import {useMediaQuery} from "react-responsive"

export default function ScrollEffect({transformValor="none", children}) {
  const [distanciaTop, setDistanciaTop] = useState(0),
  targetRef=useRef(null);
//   const mobile= useMediaQuery({maxWidth: 800});



useEffect(() => {
    const handleScroll = () => {
        const element = targetRef.current;
        if (element){
           const distance=element.getBoundingClientRect().top;
         console.log(distance);
            
          setDistanciaTop(distance);
          console.log(setDistanciaTop(distance));
          
        }
  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    

    const elementStyle = {
    opacity: distanciaTop>innerHeight*-.30? 1 : 0,
    transform: distanciaTop>innerHeight*-.30? 'none' : transformValor,
    
  }
//   console.log(distanciaTop);
  

  return (

    <>
    {React.Children.map(children, child => {
      return React.cloneElement(child, {
        ref: targetRef,
        style: elementStyle,
      });
    })}
    
  </>
    
  );
}

ScrollEffect.propTypes = {
    transformValor: PropTypes.string,
    children: PropTypes.node
  };

  
