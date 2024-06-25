import React from "react";
import ReactDom from "react-dom/client";
import {BarraNavegacion,Cuerpo,Formulario} from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from "./Login";
const root = ReactDom.createRoot(document.getElementById("root"))
const rootL= ReactDom.createRoot(document.getElementById("rootL"))

root.render(<>
<BarraNavegacion name='Luis'/>
<Cuerpo/>

</>
)

rootL.render(<>
<Login/>

</>)

