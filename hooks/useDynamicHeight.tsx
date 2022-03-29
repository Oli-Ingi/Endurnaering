import { RefObject, useEffect, useState } from "react";


export const useDynamicHeight = (node: RefObject<HTMLElement>, func?: () => void) => {
    const [height, setHeight] = useState(0);

    const handler = () => {
        node.current && height !== node.current.offsetHeight && setHeight(node.current.offsetHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handler);
        handler();

        return () => window.removeEventListener("resize", handler);
    }, []);

    return height;
}