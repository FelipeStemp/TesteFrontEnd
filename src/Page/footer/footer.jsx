import * as S from './style'
import logo from '../../assets/image/logo.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <S.footerBody>
            <S.contatos>
                <img src={logo} style={{ maxWidth: '10vw' }} />
                <a>
                    Take the first step towards a healthier, stronger <br />
                    you with our unbeatable pricing plans. Let's sweat,<br />
                    achieve, and conquer together!
                </a>
                <S.socialMedia>
                    <FacebookOutlinedIcon sx={{
                        fontSize: '1.5rem', padding: '.5rem', color: '#F9AC54', border: '1px solid #F9AC54', borderRadius: '100%',
                        '&:hover': {
                            backgroundColor: '#F9AC54',
                            color: 'white',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                            cursor: 'pointer',
                        }
                    }} />
                    <InstagramIcon sx={{
                        fontSize: '1.5rem', padding: '.5rem', color: '#F9AC54', border: '1px solid #F9AC54', borderRadius: '100%',
                        '&:hover': {
                            backgroundColor: '#F9AC54',
                            color: 'white',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                            cursor: 'pointer',
                        }
                    }} />
                    <TwitterIcon sx={{
                        fontSize: '1.5rem', padding: '.5rem', color: '#F9AC54', border: '1px solid #F9AC54', borderRadius: '100%',
                        '&:hover': {
                            backgroundColor: '#F9AC54',
                            color: 'white',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                            cursor: 'pointer',
                        }
                    }} />
                </S.socialMedia>


            </S.contatos>
            <S.divInfos>
                <S.infos>
                    <h3>Company</h3>
                    <li>Business</li>
                    <li>Franchise</li>
                    <li>Partnership</li>
                    <li>Network</li>
                </S.infos>
                <S.infos>
                    <h3>About Us</h3>
                    <li>Blogs</li>
                    <li>Security</li>
                    <li>Careers</li>
                </S.infos>
                <S.infos>
                    <h3>Contact</h3>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>BMI Calculator</li>
                </S.infos>
            </S.divInfos>
        </S.footerBody>
    )
}

export default Footer