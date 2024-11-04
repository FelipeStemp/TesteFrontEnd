import * as S from './style'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import VideocamIcon from '@mui/icons-material/Videocam';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import imgJoin from '../../assets/image/join.jpg'

function JoinUs() {
    return (
        <S.bodyJoin>
            <S.apresentation>
                <h1>WHY JOIN US ?</h1>

                <a>
                    Our diverse membership base creates a friendly and supportive <br />
                    atmosphere, where you can make friends and stay motivated.
                </a>
            </S.apresentation>

            <S.conteudo>
                <img style={{ maxWidth: '60vw', borderRadius: '10px' }} src={imgJoin} />

                <S.divInfo>
                    <S.optInfo>
                        <SupervisorAccountIcon sx={{ padding: '.5rem', backgroundColor: '#F9AC54', fontSize: '2rem', borderRadius: '5px' }} />
                        <div>
                            <S.tituloBox>Personal Trainer</S.tituloBox>
                            <S.texto>
                                Unlock your potential with our <br />
                                expert Personal Trainers.
                            </S.texto>
                        </div>
                    </S.optInfo>
                    <S.optInfo>
                        <VideocamIcon sx={{ padding: '.5rem', backgroundColor: '#F9AC54', fontSize: '2rem', borderRadius: '5px' }} />
                        <div>
                            <S.tituloBox>Practice Sessions</S.tituloBox>
                            <S.texto>
                                Elevate your fitness with <br />
                                practice sessions.
                            </S.texto>
                        </div>
                    </S.optInfo>
                    <S.optInfo>
                        <CorporateFareIcon sx={{ padding: '.5rem', backgroundColor: '#F9AC54', fontSize: '2rem', borderRadius: '5px' }} />
                        <div>
                            <S.tituloBox>Good Management</S.tituloBox>
                            <S.texto>
                                Supportive management, for <br />
                                your fitness success.
                            </S.texto>
                        </div>
                    </S.optInfo>
                </S.divInfo>
            </S.conteudo>
        </S.bodyJoin>
    )
}

export default JoinUs