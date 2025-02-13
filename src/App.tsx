import { FormulaEditor } from './formula-editor';
import './App.css'

function App() {

  return (
    <>
      <h1>Excel Formula Editor</h1>
      <FormulaEditor 
        onParseError={(errors) => console.error(errors)}
        onParseSuccess={(ast) => console.log(ast)}
      />
    </>
  )
}

export default App
