import * as S from './style'
import logo from '../../assets/image/logo.png'
import ButtonAll from '../button/button'

function NavBar(){
    return(
        <S.navBody>
            <img src={logo}/>

            <S.navOption>
                <li>Home</li>
                <li>Program</li>
                <li>Service</li>
                <li>About</li>
                <li>Community</li>
            </S.navOption>

            <ButtonAll>Join Now</ButtonAll>
        </S.navBody>
    )
}

export default NavBar