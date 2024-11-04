import * as S from './style'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import GymIcon from '@mui/icons-material/FitnessCenterOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Card from '../../components/cards/card';


function Program() {
    return (
        <S.bodyProgram>
            <S.divTitulo>
                <h1>EXPLORE OUR PROGRAM</h1>
                <S.divNav>
                    <NavigateBeforeOutlinedIcon sx={{
                        fontSize: '3rem',
                        '&:hover': {
                            color: '#D79447',
                            transition: 'color 0.3s ease, transform 0.3s ease',
                            cursor: 'pointer',
                        }
                    }} />
                    <NavigateNextOutlinedIcon sx={{
                        fontSize: '3rem',
                        '&:hover': {
                            color: '#D79447',
                            transition: 'color 0.3s ease, transform 0.3s ease',
                            cursor: 'pointer',
                        }
                    }} />
                </S.divNav>
            </S.divTitulo>

            <S.divCards>
                <Card width={'12vw'} height={'auto'} padding={'1rem'} display={'flex'} gap={'15px'}>

                    <GymIcon sx={{ backgroundColor: '#D79447', padding: '5px', fontSize: '1.8rem', borderRadius: '5px' }} />

                    <h3 style={{ margin: '0' }}>Strength</h3>

                    <a style={{ fontSize: '13px' }}>
                        Embrace the essence of <br/>
                        strength as we delve into its<br/>
                        various dimensions physical,<br/>
                        mental, and emotional.
                    </a>

                    <S.buttonCard>
                        Join Now <EastOutlinedIcon sx={{ fontSize: '15px' }} />
                    </S.buttonCard>
                </Card>

                <Card width={'12vw'} height={'auto'} padding={'1rem'} display={'flex'} gap={'15px'}>

                    <MonitorHeartIcon sx={{ backgroundColor: '#D79447', padding: '5px', fontSize: '1.8rem', borderRadius: '5px' }} />

                    <h3 style={{ margin: '0' }}>Physical Fitness</h3>

                    <a style={{ fontSize: '13px' }}>
                        It encompasses a range of<br/>
                        activities that improve<br/>
                        health, strength, flexibility,<br/>
                        and overall well-being.
                    </a>

                    <S.buttonCard>
                        Join Now <EastOutlinedIcon sx={{ fontSize: '15px' }} />
                    </S.buttonCard>
                </Card>

                <Card width={'12vw'} height={'auto'} padding={'1rem'} display={'flex'} gap={'15px'} >

                    <DirectionsRunIcon sx={{ backgroundColor: '#D79447', padding: '5px', fontSize: '1.8rem', borderRadius: '5px' }} />

                    <h3 style={{ margin: '0' }}>Fat Lose</h3>

                    <a style={{ fontSize: '13px' }}>
                        Through a combination of<br/>
                        workout routines and expert<br/>
                        guidance, we'll empower you<br/>
                        to reach your goals.
                    </a>

                    <S.buttonCard>
                        Join Now <EastOutlinedIcon sx={{ fontSize: '15px' }} />
                    </S.buttonCard>
                </Card>

                <Card width={'12vw'} height={'auto'} padding={'1rem'} display={'flex'} gap={'15px'}>

                    <ShoppingBasketIcon sx={{ backgroundColor: '#D79447', padding: '5px', fontSize: '1.8rem', borderRadius: '5px' }} />

                    <h3 style={{ margin: '0' }}>Weight Gain</h3>

                    <a style={{ fontSize: '13px' }}>
                        Designed for individuals, our<br/>
                        program offers an effective<br/>
                        approach to gaining weight<br/>
                        in a sustainable manner.
                    </a>

                    <S.buttonCard>
                        Join Now <EastOutlinedIcon sx={{ fontSize: '15px' }} />
                    </S.buttonCard>
                </Card>
            </S.divCards>
        </S.bodyProgram>
    )
}

export default Program