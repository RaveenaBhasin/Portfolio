import styled from 'styled-components'
import Connect from './Connect'

const FooterSection = () => {
    return (
        <Div>
            <Connect/>
        </Div>
    )
}

const Div = styled.div `
    display: flex;
    justify-content: center;
    margin: 1rem;
    text-align: center;
`


export default FooterSection;
