import PopUp from './components/Popup/PopUp'

export default function Home() {
  return (
    <main>
      <PopUp title={'Registro Exitoso!'} description={'Revisa tu email para validar tu cuenta.'} open={true} />
    </main>
  )
}
