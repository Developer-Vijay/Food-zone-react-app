import React from 'react'
import styled from 'styled-components';
import {Button, Container} from '../App';

const SearchResult = ({data}) => {
    return (
        <FoodCardContainer>
           <Container>
           <FoodCards>
                {data
                    ?.map((food) => <FoodCard key={food.name}>

                        <div className='food_image'>
                            <img src={"http://localhost:9000" + food.image} alt=""/>
                        </div>

                        <div className="food_info">
                            <div className="info">
                                <h3>{food.name}</h3>
                                <p>{food.text}</p>
                            </div>
                            <Button >${food
                                    .price
                                    .toFixed(2)}</Button>
                        </div>

                    </FoodCard>)
}
            </FoodCards>
           </Container>
        </FoodCardContainer>
    )
}

export default SearchResult

const FoodCardContainer = styled.section `

background-image:url("/images/bg.png");
background-size: cover;
min-height: calc(100vh - 210px);
`;

const FoodCards = styled.div `

display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;


`;

const FoodCard = styled.div `
width: 340px;
display: flex;
height: 167px;
border-radius: 20px;
border: 0.659px solid #98F9FF;
background: url(.png), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);

padding: 8px;

.food_info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  h1{
    margin-top:8px;
    font-size: 16px;
    font-weight: 500;
  }

  p{
    margin-top: 4px;
    font-size: 12px;
  }

  button{
    font-size: 12px;
  }
}
`
