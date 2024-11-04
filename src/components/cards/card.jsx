import * as S from './style'

function Card({ width, height, children, display, justContent, alignItem, padding, flexDirection, gap }) {
    return (
        <S.CardBody 
            width={width} 
            height={height} 
            display={display} 
            justContent={justContent} 
            alignItem={alignItem}
            padding={padding}
            flexDirection={flexDirection}
            gap={gap}
        >
            {children}
        </S.CardBody>
    );
}

export default Card;