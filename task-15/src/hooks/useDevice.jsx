import { useEffect } from "react";
import { useState } from "react";

const resolution = {
    mobile: '786',
    laptop: '992',
    pc: '1200'
}

const deviceFinder = () => {
    const windowWidth = window.innerWidth

    switch (true) {
        case windowWidth <= parseInt(resolution.laptop):
            return "LAPTOP";
        case windowWidth <= parseInt(resolution.pc):
            return "PC";
        case windowWidth <= parseInt(resolution.mobile):
            return "MOBILE";
        default: 
            return "COMP"
    }
}

function useDevice() {
    const [device, setDevice] = useState(() => deviceFinder())

    useEffect(() => {
        const handleResize = () => {
            setDevice(deviceFinder)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return device
}

export default useDevice