import React from "react";
import ReactDom from "react-dom/client";
import {BarraNavegacion} from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<>
<BarraNavegacion/>
</>
)

