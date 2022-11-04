import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Logo: React.FC = () => {
    const floatingDiv = useRef<null | HTMLDivElement>(null)
    //let [mouseX, setMouseX] = useState(0);
    let mouseX = 0
    const letterL = useRef<null | HTMLSpanElement>(null)
    //const [width, setWidth] = useState(0)
    let width = 0 
    const previousTimeRef = useRef<null | number>(null)
    const letterY = useRef<null | HTMLSpanElement>(null)
    const requestRef = useRef<number>(0)
    useEffect(() => {
        if (floatingDiv.current != null) {
            floatingDiv.current.onmousemove = handleMouseMove;
            floatingDiv.current.onmouseleave = () => handleMouseLeave;
            //setWidth(floatingDiv.current.getBoundingClientRect().width)
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
    }

    const onResize = () => {
        if (floatingDiv.current != null) {
            //setWidth(floatingDiv.current.getBoundingClientRect().width)
            width = floatingDiv.current.getBoundingClientRect().width
        }
    }

    let endX = width / 2;

    const animateLetters = (time: number) => {
        if (previousTimeRef.current != null
            && letterL.current != null
            && letterY.current != null) {
          mouseX += (endX - mouseX) / 15;
          console.log(mouseX)
          letterL.current.style.paddingLeft = mouseX + "px";
          letterY.current.style.paddingLeft = mouseX + "px";
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
            endX = relativeLeft
            //setMouseX(relativeLeft)
            //mouseX = relativeLeft
        }
    }
    return (
        <Link href="/">
            <a className="logo">
                <span className="f">F</span>
                <div ref={floatingDiv} className="logo__floating-container">
                    <span ref={letterL} className="l">L</span>
                    <span ref={letterY} className="y">Y</span>
                </div>
                <span className="t">T</span>
            </a>
        </Link>
    );
} 

export default Logo;
