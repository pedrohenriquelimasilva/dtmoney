import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { Container, TransactionButtonModal, RadioBox } from './style'
import closeImg from '../../assets/close.svg'
import amountImg from '../../assets/amount.svg'
import incomeImg from '../../assets/income.svg'
import { useTransactionContext } from '../../hooks/useTransactionContext'


interface NewTransitionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransitionModal({ isOpen, onRequestClose }: NewTransitionModalProps) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  const { createTransaction } = useTransactionContext()

  async function handleCreatNewTransaction(event: FormEvent) {

    event.preventDefault()


    await createTransaction({
      title,
      amount,
      category,
      type
    })


    setCategory('')
    setTitle('')
    setAmount(0)
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" className="react-modal-close" />
      </button>
      <Container
        onSubmit={handleCreatNewTransaction}
      >
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />

        <input placeholder="Valor" type="number" value={amount} onChange={event => setAmount(Number(event.target.value))} />

        <TransactionButtonModal>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type == 'deposit'}
            activeColor="green"
          >
            <img src={amountImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type == 'withdraw'}
            activeColor="red"
          >
            <img src={incomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionButtonModal>

        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}