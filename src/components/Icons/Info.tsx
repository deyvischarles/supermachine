import React from 'react'
import SvgIcon from '../../styles/SvgIcon'

interface IInfo {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const Info: React.FC<IInfo> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </SvgIcon>
    )
}

export default Info