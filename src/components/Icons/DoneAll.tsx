import SvgIcon from '../../styles/SvgIcon'

interface IDoneAll {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const DoneAll: React.FC<IDoneAll> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
        </SvgIcon>
    )
}

export default DoneAll