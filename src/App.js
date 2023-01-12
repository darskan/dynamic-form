import DynamicForm from "./Components/DynamicForm";
import Introduction from "./Components/Introduction";
import NavbarMenu from "./Components/NavbarMenu";
import Services from "./Components/Services/Services";


function App() {
  return (
    <div>
        <NavbarMenu />
        <Introduction />
        <Services/>
        <DynamicForm />
    </div>
  );
}

export default App;
