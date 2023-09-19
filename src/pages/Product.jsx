import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;

`
const Image = styled.img`
    width: 90%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`


const FilterContainer = styled.div`
    width: 40%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-content: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    font-weight: 500;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4;
    }
`
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src = "https://cdn.sportmaster.ru/upload/resize_cache/iblock/be7/1008_800_1/63933060299.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Фуболка адидас 
                </Title>
                <Desc>
                    Спортивная футболка
                </Desc>
                <Price>
                    2000
                </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>
                            Цвет
                        </FilterTitle>
                        <FilterColor color = "black"/>
                        <FilterColor color = "darkblue"/>
                        <FilterColor color = "gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>
                            Размер
                        </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>
                                XS
                            </FilterSizeOption>
                            <FilterSizeOption>
                                S
                            </FilterSizeOption>
                            <FilterSizeOption>
                                M
                            </FilterSizeOption>
                            <FilterSizeOption>
                                L
                            </FilterSizeOption>
                            <FilterSizeOption>
                                XL
                            </FilterSizeOption>

                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>
                            1
                        </Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>
                        Добавить в корзину
                    </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product