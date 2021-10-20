import { useState, useEffect } from "react";


export const useMedia = query => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        
        if (media.matches !== matches) 
            setMatches(media.matches);

        const listener = () => 
            setMatches(media.matches);
        
        media.addEventListener("change", listener)

        return media.removeEventListener("change", listener)
    }, [query, matches]);

    return matches;
}