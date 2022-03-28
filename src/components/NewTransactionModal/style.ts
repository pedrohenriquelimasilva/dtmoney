import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2{
    color: var(--text-title);
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  input{ 
    width: 100%;
    padding: 0 1.5rem;
    border: 1px solid #D7D7D7;
    border-radius: .25rem;
    height: 4rem;
    background: #E7E9EE;
    font-size: 1rem;
    font-weight: 400;


    & + input {
      margin-top: 1.5rem;
    }

    &::placeholder{
      color: var(--text-body)
    }

   
  } 

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;

    border: none;
    border-radius: .25rem;

    background: var(--green);

    color: #fff;
    font-size: 1rem;
    font-weight: 600;

    transition: filter 2ms;

    &:hover{
      filter: brightness(0.9);
    }
  }
`

export const TransactionButtonModal = styled.div` //sempre q existir uma nova secção, vai existir um novo estilizador
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
    margin: 1rem 0;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const color = {
  green: '#33CC95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
      height: 4rem;
      border: 1px solid #d7d7d7;
      border-radius: .25rem;
      background: ${props => props.isActive ? transparentize(0.9, color[props.activeColor]) : 'transparent'}; //essa logica de colocar condições em estados é muito boa para pratica em css

      display: flex;
      align-items: center;
      justify-content:center;
      transition: border-color 2ms;

      &:hover{
        border-color: ${darken(0.1, "#d7d7d7")}
      }

      img{
        width: 20px;
        height: 20px;
      }

      span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--text-title)
      }
`