import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option`
    
`


const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>
            Футболки
        </Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Фильтр:
                </FilterText>
                <Select>
                    <Option disabled selected>
                        Цвет
                    </Option>
                    <Option>
                        Белый
                    </Option>
                    <Option>
                        Черный
                    </Option>
                    <Option>
                        Красный
                    </Option>
                    <Option>
                        Синий
                    </Option>
                    <Option>
                        Желтый
                    </Option>
                    <Option>
                        Зеленый
                    </Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Размер
                    </Option>
                    <Option>
                        XS
                    </Option>
                    <Option>
                        S
                    </Option>
                    <Option>
                        M
                    </Option>
                    <Option>
                        L
                    </Option>
                    <Option>
                        XL
                    </Option>                    
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Сортировать:
                </FilterText>
                <Select>
                    <Option selected>
                        Новинки
                    </Option>
                    <Option>
                        Цена (возвр)
                    </Option>
                    <Option> 
                        Цена (убыв)
                    </Option>                              
                </Select>   
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList