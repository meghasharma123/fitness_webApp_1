import styled from 'styled-components'

export const TopName = styled.div`
    display: flex;
    justify-content:space-between;
    alignItems:center;
    @media (max-width: 768px) {
        margin:1rem;
    }
`
export const TopSide = styled.div`
    display: flex;
    margin : 1rem;
    @media (max-width: 768px) {
        margin:0.5rem;
    }
`

export const TopCal = styled.div`
    margin-left : 1rem;
    box-sizing:border-box;
    border: 1px white solid;
    background-color:grey;
    display:flex;
    padding:5px;
    border-radius:6px;
    margin-top : -8px;
`

export const CalData = styled.div`
    background-color: #3C4048,
`
export const SearchBox = styled.div`
    max-width:100%;
    align-items:center;
`
export const Input= styled.input`
    @media (max-width: 1000px) {
        max-width:18rem;
    }
`


export const CardData = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 15px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const Calories = styled.div`
    display:flex;
    justify-content: space-evenly;
    margin-top:2rem;
    align-items:center;
    @media (max-width: 950px) {
        flex-direction: column;
        margin:1rem;
    }
`
export const Trainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    width:100%;
    @media (max-width: 950px) {
        flex-direction: column;
        margin:1rem;
    }
`

export const Routine = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    @media (max-width: 850px) {
        flex-direction: column;
        margin:1rem;
    }
`
export const FriendCard = styled.div`
    ${'' /* margin-left:10rem; */}
    display:flex;
    justify-content:space-around;
    @media (max-width:800px){
        flex-direction: column;
        align-items: flex-start;
        margin-left:1rem !important;
    }
`
export const InviteCard = styled.div`
    margin:5rem;
    background-color:#B2B2B2;
    border-radius:12px;
    max-width:50rem;
    margin-left:25rem;
    @media (max-width:950px){
        margin:1rem;
    }
`

export const Button = styled.button`
    border-radius:8px;
    padding : 10px;
    cursor:pointer;
    color: #1976d2;
`

export const AddRoutine = styled.button`
    border:2px #1976d2 solid;
    margin-top:2rem;
    width:40rem;
    height:50px;
    margin-left:4rem;
    border-radius:8px;
    padding : 10px;
    cursor:pointer;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 1.35rem;
    text-transform: uppercase;
    color: #1976d2;
    @media (max-width:950px){
        width:12rem;
        margin-left:0.5rem;
        font-size:0.95rem;
    }
`