import * as S from './style'
import imagen1 from '../../assets/image/class-1.jpg'
import imagen2 from '../../assets/image/class-2.jpg'
import ButtonAll from '../../components/button/button'

function ClassGet() {
    return (
        <S.bodyClass>
            <S.conteudo>
                <img style={{ maxWidth: '80%', position: 'absolute', top: '0', right: '0', borderRadius: '5px' }} src={imagen1} />
                <img style={{ maxWidth: '45%', position: 'absolute', bottom: '0', left: '3vw', borderRadius: '5px' }} src={imagen2} />
            </S.conteudo>
            <S.conteudo>
                <h1 style={{margin: 0}}>THE CLASS YOU WILL<br />
                    GET HERE
                </h1>
                <a>
                    Led by our team of expert and motivational instructors, "The Class You
                    Will Get Here* is a high-energy, results-driven session that combines a
                    perfect blend of cardio, strength training, and functional exercises.
                    Each class is carefully curated to keep you engaged and challenged,
                    ensuring you never hit a plateau in your fitness endeavors.
                </a>
                <ButtonAll>Book A Class</ButtonAll>
            </S.conteudo>
        </S.bodyClass>
    )
}

export default ClassGet