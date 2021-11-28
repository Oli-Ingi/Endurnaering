import { RefObject, useEffect } from "react";


/**
 * calls onClick if user clicks on body outside of the chosen node.
 */
const useOutsideClickListener = (node: RefObject<HTMLElement>, onOutsideClick?: () => void) => {
    useEffect(() => {
        if (!onOutsideClick || !node?.current) 
            return;
        
        const handleClick: EventListener = e => {
            
            if (node.current?.contains(e.target as Node))
                return;
                onOutsideClick();
        }

        document.body.addEventListener("click", handleClick);

        return () => document.body.removeEventListener("click", handleClick);
    }, [node, onOutsideClick])
}


export default useOutsideClickListener