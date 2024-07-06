import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const ChangeTheme = ({setlightMode}) => {
    const [warning, setWarnin] = useState(false)

    function click() {
        if(window.innerHeight <= 786) {
            setWarnin(true)
            setlightMode(true)
        }else {
            setlightMode((pas) => !pas)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setWarnin(true)
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, warning)



  return (
    <div>
        <button onClick={click}>Click for change</button>
        <span
            style={
                {
                    visibility: `${warning ? "visible" : "hidden"}`,
                    color: 'green'
                }
            }
        ></span>
    </div>
  )
}
