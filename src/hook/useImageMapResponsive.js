import { useState, useEffect } from 'react'

export function useImageMapResponsive(areasRoot, imageWidth) {
    const [areas, setAreas] = useState(areasRoot);

    useEffect(() => {
        function handleResize() {
            setAreas({
                areas: areas.map(item => ({
                    ...item,
                    coords: item.coords.map((coord) => window.innerWidth / imageWidth * coord)
                }))
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return areas;
}
