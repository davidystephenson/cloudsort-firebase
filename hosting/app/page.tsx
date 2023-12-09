import { LoginView } from '../auth/LoginView'
import { RegisterView } from '../auth/RegisterView'

export default function Page (): JSX.Element {
  return (
    <>
      <RegisterView />
      <LoginView />
    </>
  )
}
