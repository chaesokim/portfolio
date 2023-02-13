import { useEffect, useRef, useState } from 'react';
import Navi from './Navi';

function Header(props){
  const targetRef = useRef(null); 
  const [menuToggle, menuToggleSet ] = useState(true); 
  
  // - 성능개선 코드
  const handleScroll = () => {
    //console.log("scrolling");
    
    if (window.scrollY > 100) {
      targetRef.current.classList.add('scroll');
      //style 옵션의 포지션에 값넣기      
    }else{
      targetRef.current.classList.remove('scroll')
    }
  };
  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100); // 성능화개선
    return () => {
      clearInterval(timer); //setInterval 지우기
      window.removeEventListener("scroll", handleScroll); // scroll 이벤트 지우기
    };
  }, []);

    return(
        <header ref={targetRef} id="hd" 
        className="App-header d-flex justify-content-between align-items-center px-lg-5 fixed-top ">
          <h1 className="mb-0">
            <a href="#home" className="d-block font-yes">CH.K</a>
          </h1>         
        <Navi  />
        </header>
    )
  }
export default Header;
  