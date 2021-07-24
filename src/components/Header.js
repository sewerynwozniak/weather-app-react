import styled from 'styled-components'

const Header = () => {
    return (
        <header>
            <SyledH1>Weather App</SyledH1>
        </header>
    )
}


const SyledH1 = styled.h1`
    text-align: center;
    color: #fff;

`

export default Header
