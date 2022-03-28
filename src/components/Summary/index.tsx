import { Container } from "./style"
import incomeImg from '../../assets/income.svg'
import totalImg from '../../assets/Total.svg'
import amountImg from '../../assets/amount.svg'
import { useTransactionContext } from "../../hooks/useTransactionContext"

export function Summary() {
  const { transactions } = useTransactionContext()

  const summery = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraw += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0,
  })

  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={amountImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: "BRL"
          }).format(summery.deposit)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={incomeImg} alt="Saídas" />
        </header>
        <strong>-
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: "BRL"
          }).format(summery.withdraw)}
        </strong>
      </div>

      <div className="background-total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: "BRL"
          }).format(summery.total)}
        </strong>
      </div>
    </Container>
  )
}