import React from "react";
import ReactDom from "react-dom/client";
import { Greeting ,User} from "./Greeting";
import {TaksC} from "./taks"
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<>
<TaksC ready={true}/>
</>
)

