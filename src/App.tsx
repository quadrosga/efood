import React from "react";
import { GlobalCss } from "./styles";

function App() {
  return (
    <>
      <GlobalCss>
        <div className="container">Conteúdo</div>
      </GlobalCss>
    </>
  );
}

export default App;
