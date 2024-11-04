import Card from '../../components/cards/card'
import Check from '@mui/icons-material/CheckCircleOutline';
import * as S from './style'
import ButtonAll from '../../components/button/button';

function PricePlans() {
    return (
        <S.priceBody>
            <S.apresentation>
                <h1>OUR PRICING PLAN</h1>

                <a>
                    Our pricing plan comes with various membership tiers, each tailored to <br />
                    cater to different preferences and fitness aspirations.
                </a>
            </S.apresentation>

            <S.cardsBody>
                <Card padding={'2rem'} width={'15vw'} height={'45vh'}>

                    <div style={{height: '90%'}}>
                        <h7>Basic Plan</h7>
                        <h1>$16</h1>
                        <hr />
                        <S.optPlans style={{ marginTop: '2rem' }}><Check sx={{ color: '#F9AC54' }} />Smart workout plan</S.optPlans>
                        <S.optPlans style={{ marginTop: '1rem' }}><Check sx={{ color: '#F9AC54' }} />At home workouts</S.optPlans>
                    </div>

                    <ButtonAll width={'100%'} backgroundColor={'#1F2125'} hoverColor={'#F9AC54'} border={'1px solid #F9AC54'}>Join Now</ButtonAll>
                </Card>

                <Card padding={'2rem'} width={'15vw'} height={'45vh'}>

                    <div style={{height: '90%'}}>
                        <h7>Weekly Plan</h7>
                        <h1>$25</h1>
                        <hr />
                        <S.optPlans style={{ marginTop: '2rem' }}><Check sx={{ color: '#F9AC54' }} />PRO Gyms</S.optPlans>
                        <S.optPlans style={{ marginTop: '1rem' }}><Check sx={{ color: '#F9AC54' }} />Smart workout plan</S.optPlans>
                        <S.optPlans style={{ marginTop: '1rem' }}><Check sx={{ color: '#F9AC54' }} />At home workouts</S.optPlans>
                    </div>

                    <ButtonAll width={'100%'} backgroundColor={'#1F2125'} hoverColor={'#F9AC54'} border={'1px solid #F9AC54'}>Join Now</ButtonAll>
                </Card>

                <Card padding={'2rem'} width={'15vw'} height={'45vh'}>

                    <div style={{height: '90%'}}>
                        <h7>Monthly Plan</h7>
                        <h1>$45</h1>
                        <hr />
                        <S.optPlans style={{ marginTop: '2rem' }}><Check sx={{ color: '#F9AC54' }} />ELITE Gyms & Classes</S.optPlans>
                        <S.optPlans style={{ marginTop: '1rem' }}><Check sx={{ color: '#F9AC54' }} />PRO Gyms</S.optPlans>
                        <S.optPlans style={{ marginTop: '1rem' }}><Check sx={{ color: '#F9AC54' }} />Smart workout plan</S.optPlans>
                        <S.optPlans style={{ marginTop: '1rem' }}><Check sx={{ color: '#F9AC54' }} />At home workouts</S.optPlans>
                        <S.optPlans style={{ marginTop: '1rem' }}><Check sx={{ color: '#F9AC54' }} />Personal Training</S.optPlans>
                    </div>

                    <ButtonAll width={'100%'} backgroundColor={'#1F2125'} hoverColor={'#F9AC54'} border={'1px solid #F9AC54'}>Join Now</ButtonAll>
                </Card>
            </S.cardsBody>
        </S.priceBody>
    )
}

export default PricePlans