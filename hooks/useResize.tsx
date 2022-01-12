import { useEffect } from "react";


export const useResizeObserver = (func: () => void) => {
    useEffect(() => {
        window.addEventListener("resize", func);

        func();
        
        return () => window.removeEventListener("resize", func);
    }, []);
}