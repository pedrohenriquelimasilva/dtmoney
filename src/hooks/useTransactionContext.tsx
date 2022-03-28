import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'

interface TransactionProps {
  id: number,
  category: string,
  amount: number,
  createdAt: string,
  title: string,
  type: string,
}

type TransactionInput = Omit<TransactionProps, "id" | "createdAt">

interface Transaction {
  transactions: TransactionProps[],
  createTransaction: (transaction: TransactionInput) => Promise<void>,
}

interface TransactionContextProviderProps {
  children: ReactNode
}

const TransactionContext = createContext<Transaction>({} as Transaction)


export function TransactionContextProvider({ children }: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api("transaction").then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transaction", transactionInput)

    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactionContext() {
  const context = useContext(TransactionContext)

  return context
}