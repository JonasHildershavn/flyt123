import { useEffect, useState } from 'react'

export const useWindowScrollPositions = (init) => {

    const [scrollPosition, setPosition] = useState(init)

    useEffect(() => {
        function updatePosition() {
            setPosition(window.scrollY)
        }

        window.addEventListener('scroll', updatePosition)
        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}