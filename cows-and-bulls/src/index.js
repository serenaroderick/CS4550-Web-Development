import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from "./registerServiceWorker";

import UI from "./UI"

ReactDOM.render(<UI />, document.getElementById("root"));
registerServiceWorker();