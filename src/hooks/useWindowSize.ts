import { useEffect, useState } from "react";

export default function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(function(){
       async function handleResize(){

            const w = await (window.innerWidth > 0) ? window.innerWidth : (window as any).width;
            const h = await (window.innerHeight > 0) ? window.innerHeight : (window as any).height;
            
            setWindowSize({
                width: w,
                height: h
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}