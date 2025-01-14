import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";

ReactDOM.render(
  <IntlProvider>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
