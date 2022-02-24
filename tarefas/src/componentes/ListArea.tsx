import React from 'react'
import {useRef } from 'react'

export const ListArea = React.forwardRef(() => {  // referencia utilzada para conseguir manipular o elemento DOM

    const div = useRef<HTMLDivElement>(null)

    return(
      <div id="list-area" ref={div} className="list-area">

      </div>
    )
})