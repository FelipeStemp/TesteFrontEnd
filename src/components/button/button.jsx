import * as S from './style'

function ButtonAll({ width, height, children, display, justContent, alignItem, padding, flexDirection, gap, backgroundColor, hoverColor, border}) {
    return (
        <S.buttonBody
            width={width}
            height={height}
            display={display}
            justContent={justContent}
            alignItem={alignItem}
            padding={padding}
            flexDirection={flexDirection}
            gap={gap}
            backgroundColor={backgroundColor}
            hoverColor={hoverColor}
            border={border}
        >
            {children}
        </S.buttonBody>
    )
}

export default ButtonAll