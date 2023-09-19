import styled from "styled-components"


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;    
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;

`
const Button = styled.button`
    width: 40%;
    font-size: 20px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 10px 0px;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
`
const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>
            Войти
        </Title>
        <Form>
            <Input placeholder="Имя пользователя"/>            
            <Input placeholder="Пароль"/>            
            <Button>
                Войти
            </Button>
            <Link>
                Забыли пароль?
            </Link>
            <Link>
                Создать новый аккаунт
            </Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login