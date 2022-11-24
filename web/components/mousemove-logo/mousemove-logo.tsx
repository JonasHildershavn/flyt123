import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MousemoveLogo: React.FC = () => {
    const floatingDiv = useRef<null | HTMLDivElement>(null)
    let mouseX = 0
    let mouseXL = 0
    let mouseXY = 0
    let width = 0 
    let endX: number | null = null
    let lastEndX: number | null = null
    let lLeft = 0
    let yLeft = 0
    let containerLeft = 0
    let max = 0
    let min = 0
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
            containerLeft = floatingDiv.current.getBoundingClientRect().left
        }
        if (letterL.current != null && letterY.current != null) {
            lLeft = letterL.current.getBoundingClientRect().left
            yLeft = letterY.current.getBoundingClientRect().left
            // minL = lLeft - containerLeft
            // minY = yLeft - containerLeft + letterL.current.getBoundingClientRect().width
            // maxL = lLeft - containerLeft + width - letterY.current.getBoundingClientRect().width - letterL.current.getBoundingClientRect().width
            // maxY = yLeft - containerLeft + width - letterY.current.getBoundingClientRect().width
            min = containerLeft + letterL.current.getBoundingClientRect().width
            max = containerLeft + width - letterY.current.getBoundingClientRect().width
            mouseXL = lLeft
            mouseXY = yLeft
        }
        //requestRef.current = requestAnimationFrame(animateLetters);
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(requestRef.current);
          };
    })

    const handleMouseLeave = (ev: any) => {
        //cancelAnimationFrame(requestRef.current);
        endX = null
    }

    const handleMouseEnter = (ev: any) => {
        requestRef.current = requestAnimationFrame(animateLetters)
    }

    const onResize = () => {
        if (floatingDiv.current != null) {
            width = floatingDiv.current.getBoundingClientRect().width
            containerLeft = floatingDiv.current.getBoundingClientRect().left
            
        }
        if (letterL.current != null && letterY.current != null) {
            lLeft = letterL.current.getBoundingClientRect().left
            yLeft = letterY.current.getBoundingClientRect().left
            mouseXL = lLeft
            mouseXY = yLeft
            min = containerLeft + letterL.current.getBoundingClientRect().width
            max = containerLeft + width - letterY.current.getBoundingClientRect().width
        }
    }

    const animateLetters = (time: number) => {
        if (previousTimeRef.current != null
            && letterL.current != null
            && letterY.current != null
            && floatingDiv.current != null) {
        
          if (endX == null) {
            mouseXL = ((lLeft - mouseXL) / 50)
            mouseXY = ((yLeft - mouseXY) / 50) 
            mouseXL += mouseXY
            mouseXY += mouseXY
            const leftL = mouseXL
            const leftY = mouseXY
            letterL.current.style.transform = `translateX(${leftL}px)`;
            letterY.current.style.transform = `translateX(${leftY}px)`;
            mouseXL += lLeft
            mouseXY += yLeft
          } else {

            const containerWidth = floatingDiv.current.getBoundingClientRect().width
            const widthL = letterL.current.getBoundingClientRect().width
            const widthY = letterY.current.getBoundingClientRect().width
            const isNegative = lastEndX != null && lastEndX > endX

            mouseXL += isNegative ? ((endX - mouseXL - widthL) / 40) : ((endX - mouseXL - widthL) / 80)
            mouseXY += isNegative ? ((endX - mouseXY) / 80) : ((endX - mouseXY) / 40)

            let leftL = mouseXL - lLeft
            let leftY = mouseXY - yLeft
            letterL.current.style.transform = `translateX(${leftL}px)`;
            letterY.current.style.transform = `translateX(${leftY}px)`;
          }
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animateLetters);
      };

    const [left, setLeft] = useState<number>(0)
    const handleMouseMove = (e: MouseEvent) => {
        const div = e.target;
        if (floatingDiv.current != null) {
            const x = e.pageX;
            endX = x
            endX = Math.max(min, endX)
            endX = Math.min(max, endX)
        }
    }
    return (
        <Link href="/">
            <a className="logo">
                <div className="f">F</div>
                <div ref={floatingDiv} className="logo__floating-container">
                    <div ref={letterL} className="l">L</div>
                    <div ref={letterY} className="y">Y</div>
                </div>
                <div className="t">T</div>
            </a>
        </Link>
    );
} 

export default MousemoveLogo;