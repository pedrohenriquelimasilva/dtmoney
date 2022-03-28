import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyled } from "./style/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransitionModal } from "./components/NewTransactionModal";
import { TransactionContextProvider } from "./hooks/useTransactionContext";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false)

  function handleOpenIsNewTransactionModal() {
    setIsNewTransactionModal(true)
  }

  function handleCloseIsNewTransactionModal() {
    setIsNewTransactionModal(false)
  }

  return (
    <TransactionContextProvider>
      <Header onNewTransitionModal={handleOpenIsNewTransactionModal} />
      <Dashboard />

      <NewTransitionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseIsNewTransactionModal}
      />

      <GlobalStyled />
    </ TransactionContextProvider>
  );
}