import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Logo: React.FC = () => {
    const floatingDiv = useRef<null | HTMLDivElement>(null)
    let mouseX = 0
    let mouseXL = 0
    let mouseXY = 0
    let width = 0 
    let endX : number | null = null
    let lLeft = 0
    let yLeft = 0
    let containerLeft = 0
    let maxL = 0
    let maxY = 0
    let minL = 0
    let minY = 0
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
            minL = lLeft - containerLeft
            minY = yLeft - containerLeft + letterL.current.getBoundingClientRect().width
            maxL = lLeft - containerLeft + width - letterY.current.getBoundingClientRect().width - letterL.current.getBoundingClientRect().width
            maxY = yLeft - containerLeft + width - letterY.current.getBoundingClientRect().width
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
        }
    }

    const animateLetters = (time: number) => {
        if (previousTimeRef.current != null
            && letterL.current != null
            && letterY.current != null
            && floatingDiv.current != null) {
        
          if (endX == null) {
            mouseXL = ((lLeft - mouseXL) / 30)
            mouseXY = ((yLeft - mouseXY) / 30) 
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

            mouseXL += endX > mouseXL - widthL ? ((endX - mouseXL - widthL) / 20) : ((endX - mouseXL - widthL) / 50)// + lLeft
            mouseXY += endX > mouseXY ? ((endX - mouseXY) / 50) : ((endX - mouseXY) / 20) // + yLeft

            //mouseXL += endX < mouseXL ? (endX - mouseXL) / 30 : (endX - mouseXL) / 100
            //mouseXY += endX < mouseXY ? (endX - mouseXY) / 100 : (endX - mouseXY) / 30
          
          //mouseX += (endX - mouseX) / 15;
            
            

            //const relativeLeft = (containerWidth * mouseXL)


            //   if (mouseXL < 0.03) mouseXL = 0
            //   if (mouseXY < 0.03) mouseXY = 0
            //const leftL = (mouseX / width) * (widthL / width)
            //const leftY = (mouseX / width) * (widthY / width)


            //   const leftL = mouseXL * widthL
            //   const leftY = mouseXY * widthY

            let leftL = mouseXL - lLeft//mouseXL - lLeft - widthL 
            let leftY = mouseXY - yLeft//mouseXY - yLeft

             console.log(leftL)
            
            // leftL = Math.max(leftL, minL)
            // leftL = Math.min(leftL, maxL)

            // leftY = Math.max(leftY, minY)
            // leftY = Math.min(leftY, maxY)
            
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
            //const containerRect = floatingDiv.current.getBoundingClientRect()
            //const relativeLeft = x - containerRect.left;
            // setLeft(relativeLeft * 100);
            // console.log("left:", relativeLeft + "%")

            //endX = relativeLeft / width//relativeLeft
            
            endX = x
            //setMouseX(relativeLeft)
            //mouseX = relativeLeft
        }
    }
    return (
        <Link href="/">
            <a className="logo">
                {/* <span className="f">F</span>
                <div ref={floatingDiv} className="logo__floating-container">
                    <div ref={letterL} className="l">L</div>
                    <div ref={letterY} className="y">Y</div>
                </div>
                <span className="t">T</span> */}
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

export default Logo;
