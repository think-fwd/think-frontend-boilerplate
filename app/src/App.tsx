import Router from './router'
import { Modal } from './components/modal'
import { ModalProvider } from './hooks/modal'
export default function App() {
  return (
    <ModalProvider>
      <Router />
      <Modal />
    </ModalProvider>
  )
}
