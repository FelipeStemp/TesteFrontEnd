import ButtonAll from '../../components/button/button'
import imagenHome from '../../assets/image/header.png'
import * as S from './style'

function Home() {
    return (
        <S.bodyHome>
            <S.contentHome>
                <S.conteudo style={{display: 'flex', }}>
                    <S.titulo>BEST FITNESS IN THE TOWN</S.titulo>
                    <S.tituloBig>
                        <S.outlined>MAKE </S.outlined>YOUR
                        <br />BODY SHAPE
                    </S.tituloBig>
                    <S.texto>
                        Unleash your potential and embark on a journey towards a stronger,
                        fitter, and more confident you. Sign up for 'Make Your Body Shape' now
                        and witness the incredible transformation your body is capable of!
                    </S.texto>
                    <ButtonAll>Get Started</ButtonAll>
                </S.conteudo>

                <S.conteudo style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img style={{maxWidth: '60%'}} src={imagenHome} alt="Header Fitness" />
                </S.conteudo>
            </S.contentHome>
        </S.bodyHome >
    )
}

export default Home