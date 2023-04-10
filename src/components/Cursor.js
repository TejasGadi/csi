import React from 'react'
import styled from 'styled-components'

const Cursor = ({ cursorX, cursorY, zIndexValue }) => {
    console.log(zIndexValue);
    return (
        <CursorContainer className='cursor' style={{ left: cursorX + 'px', top: cursorY + 'px', zIndex: { zIndexValue } }}>

        </CursorContainer>
    )
}

const CursorContainer = styled.div`
    width: 60px;
    height: 60px;
    /* background: #ffffff; */
    /* background: transparent; */
    border: 2px solid white;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    /* mix-blend-mode: exclusion; */
    transform: translate(-50%,-50%);
`

export default Cursor
