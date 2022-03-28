import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './style'

interface HeaderProps {
  onNewTransitionModal: () => void
}

export function Header({ onNewTransitionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <button type="button" onClick={onNewTransitionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}