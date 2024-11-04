import * as S from './style'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import member from '../../assets/image/member.jpg'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import React from 'react';

function Comments() {
    const num = 4;
    return (
        <S.comentBody>
            <S.comentario>

                <S.aspas>
                    <FormatQuoteIcon sx={{fontSize: '8rem', color: '#F9AC54' }}/>
                </S.aspas>
                <h3 style={{ margin: 0 }}>MEMBER REVIEW</h3>

                <a>
                    What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable,
                    approachable, and genuinely invested in helping members achieve their fitness goals. They take
                    the time to understand individual needs and create personalized workout plans, ensuring maximum
                    results and safety.
                </a>

                <div>
                    {Array.from({ length: num }, (_, i) => (
                        <React.Fragment key={i}>
                            <StarIcon sx={{ color: '#F9AC54' }} />
                            {i === num - 1 && <StarHalfIcon sx={{ color: '#F9AC54' }} />}
                        </React.Fragment>
                    ))}

                </div>

                <S.personComent>
                    <img style={{ maxWidth: '4rem', borderRadius: '100%' }} src={member} />
                    <div>
                        <h3 style={{ margin: '0' }}>Jane Cooper</h3>
                        <a>Software Developer</a>
                    </div>
                </S.personComent>

                <S.nav>
                    <NavigateBeforeOutlinedIcon sx={{fontSize: '3rem', color: '#F9AC54',
                    '&:hover': {
                            cursor: 'pointer',
                        }}} />
                    <NavigateNextOutlinedIcon sx={{fontSize: '3rem', color: '#F9AC54',
                    '&:hover': {
                            cursor: 'pointer',
                        }}}/>
                </S.nav>

            </S.comentario>

        </S.comentBody>
    )
}

export default Comments