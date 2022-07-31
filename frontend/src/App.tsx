import {BrowserRouter} from "react-router-dom";
import styled from "styled-components"
import {Router} from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className={'app_page'}>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

const SAppPage = styled.div`
  background-color: #f7e93f;
`

export default App;
