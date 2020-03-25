import {useState,useLayoutEffect} from 'react'

export const useWindowSize = () => {
    console.log('custom hook calling');

    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    useLayoutEffect(() => {
        function updateWidth() {
            setInnerWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        updateWidth()
        return () => window.removeEventListener('resize', updateWidth)
    }, [])
    return innerWidth
}