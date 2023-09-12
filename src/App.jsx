import {useEffect, useState} from 'react';
import './App.css';
import styled from "styled-components";
import SearchResult from './components/SearchResult';

function App() {

    const BASE_URL = "http://localhost:9000/";

    const [data,
        setData] = useState(null);
    const [loading,
        setLoading] = useState(false);
    const [error,
        setError] = useState(null);

    const [filterData,
        setFilterData] = useState(null);
    const [selectedBtn,
        setSelectedBtn] = useState("all");

    const filterBtns = [
        {
            name: "All",
            type: "all"
        }, {
            name: "Lunch",
            type: "lunch"
        }, {
            name: "Breakfast",
            type: "breakfast"
        }, {
            name: "Dinner",
            type: "dinner"
        }
    ];

    useEffect(() => {}, []);
    useEffect(() => {
        const fetchFoodData = async() => {
            setLoading(true);
            try {
                const response = await fetch(BASE_URL);
                const json = await response.json();
                setData(json);
                setFilterData(json);
                setLoading(false);

            } catch (error) {
                setError("unable to fetch data");
            }

        }
        fetchFoodData();
    }, []);

    const searchFood = (e) => {
        const searchValue = e.target.value;

        if (searchValue === "") {
            setFilterData(null);
        }

        const filter = data
            ?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))

        setFilterData(filter);

    }

    const filterFood = (type) => {
        if (type === "all") {
            setFilterData(data);
            setSelectedBtn("all");
        }

        const filter = data
            ?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()))
        setFilterData(filter);
        setSelectedBtn(type);
    }

    if (error) 
        return <div>{error}</div>

    if (loading) 
        return <div>loading.....</div>

    return ( <> <Container>

        <TopContainer>
            <div className='logo'>
                <img src="/images/appLogo.svg" alt="logo"/>
            </div>

            <div className='search'>
                <input onChange={searchFood} type="text" placeholder='Search Food'/>
            </div>
        </TopContainer>
        <FilterContainer>

        
            <Button isSelected={selectedBtn==="all"} onClick={() => filterFood("all")}>All</Button>
            <Button isSelected={selectedBtn==="breakfast"} onClick={() => filterFood("breakfast")}>Breakfast</Button>
            <Button isSelected={selectedBtn=="lunch"} onClick={() => filterFood("lunch")}>Lunch</Button>
            <Button isSelected={selectedBtn==="dinner"} onClick={() => filterFood("dinner")}>Dinner</Button>

        </FilterContainer>

    </Container> < SearchResult data = {
        filterData
    } /> </>);
}

export default App;

export const Container = styled.div `
 
 max-width: 1200px;
 margin: 0 auto;
`;
const TopContainer = styled.section `
min-height:140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

.search{
  background-color: transparent;
  border: 1px solid red;
  color: white;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;

  input {
    background-color: transparent;
    border: none;
    height: 40px;
    font-size: 16px;

    padding: 0 10px;
    border-radius: 5px;
    color: white;
    &::placeholder{
      color: white;
    }

  }
}

@media (0<width<600px){
  flex-direction: column;
  height:120px;

}
`;

const FilterContainer = styled.section `
display: flex;
justify-content: center;
gap: 12px;
padding-bottom: 40px;
`;

export const Button = styled.button `
border-radius: 5px;
background: ${({isSelected})=>  isSelected ? "orange" : "#FF4343"}  ;
outline: 1px solid  ${({isSelected})=>  isSelected ? "white" : "#FF4343"}  ;

padding: 6px 12px;
border: none;
cursor: pointer;

&:hover{
  background-color: #f22f2f;
}
color: white;

`;
