import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Logo: React.FC = () => {
    const floatingDiv = useRef<null | HTMLDivElement>(null)
    let mouseX = 0
    let mouseXL = 0
    let mouseXY = 0
    let width = 0 
    let endX = 0
    const previousTimeRef = useRef<null | number>(null)
    const letterY = useRef<null | HTMLDivElement>(null)
    const letterL = useRef<null | HTMLDivElement>(null)
    const requestRef = useRef<number>(0)
    useEffect(() => {
        if (floatingDiv.current != null) {
            floatingDiv.current.onmousemove = handleMouseMove;
            floatingDiv.current.onmouseleave = handleMouseLeave;
            floatingDiv.current.onmouseenter = handleMouseEnter
            width = floatingDiv.current.getBoundingClientRect().width
        }
        requestRef.current = requestAnimationFrame(animateLetters);
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(requestRef.current);
          };
    })

    const handleMouseLeave = (ev: any) => {
        cancelAnimationFrame(requestRef.current);
        endX = 0
    }

    const handleMouseEnter = (ev: any) => {
        requestRef.current = requestAnimationFrame(animateLetters)
    }

    const onResize = () => {
        if (floatingDiv.current != null) {
            width = floatingDiv.current.getBoundingClientRect().width
        }
    }

    const animateLetters = (time: number) => {
        if (previousTimeRef.current != null
            && letterL.current != null
            && letterY.current != null) {

          mouseXL += endX < mouseXL ? (endX - mouseXL) / 7 : (endX - mouseXL) / 30
          mouseXY += endX < mouseXY ? (endX - mouseXY) / 30 : (endX - mouseXY) / 7
          //mouseX += (endX - mouseX) / 15;
          const widthL = width - letterL.current.getBoundingClientRect().width
          const widthY = width - letterL.current.getBoundingClientRect().width
          //const leftL = (mouseX / width) * (widthL / width)
          //const leftY = (mouseX / width) * (widthY / width)


          const leftL = mouseXL * widthL
          const leftY = mouseXY * widthY
          
          letterL.current.style.transform = `translateX(${leftL}px)`;
          letterY.current.style.transform = `translateX(${leftY}px)`;
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animateLetters);
      };

    const [left, setLeft] = useState<number>(0)
    const handleMouseMove = (e: MouseEvent) => {
        const div = e.target;
        if (floatingDiv.current != null) {
            const x = e.pageX;
            const containerRect = floatingDiv.current.getBoundingClientRect()
            const relativeLeft = x - containerRect.left;
            // setLeft(relativeLeft * 100);
            // console.log("left:", relativeLeft + "%")

            endX = relativeLeft / width//relativeLeft
            //setMouseX(relativeLeft)
            //mouseX = relativeLeft
        }
    }
    return (
        <Link href="/">
            <a className="logo">
                <span className="f">F</span>
                <div ref={floatingDiv} className="logo__floating-container">
                    <div ref={letterL} className="l">L</div>
                    <div ref={letterY} className="y">Y</div>
                </div>
                <span className="t">T</span>
            </a>
        </Link>
    );
} 

export default Logo;
