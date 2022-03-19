// import { render, screen } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

test("APP renders without crashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
