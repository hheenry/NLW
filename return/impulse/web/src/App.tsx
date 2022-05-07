interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="button">{props.text ?? 'Default'}</button> /* Assim o TS não vai bloquear porque um botao esta sem atributos. */
}

function App() {
  return (
    <div className="flex gap-2 m-2">
      <Button text="Enviar" />
      <Button text="Ok" />
      <Button />
    </div>
  )
}

export default App