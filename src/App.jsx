import TodoList from './components/TodoList.jsx'
import GlobalStyle from './GlobalStyle.jsx'
function App() {
  return (
 <>
  <GlobalStyle/>

  <div className="todo-app"><TodoList/></div>
  
 </>
 )
}

export default App