import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ReactProvider } from "@web3-react/core";
import store from "./app/store";
import { Provider } from "react-redux";
import "./assets/scss/style.scss";
import Web3 from "web3";
import SendWyre from "react-use-wyre";

function getLibrary(provider, connector) {
  return new Web3(provider);
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <SendWyre
        apiKey={process.env.WYRE_API_KEY}
        secretKey={process.env.WYRE_SECRET_KEY}
        partnerId={process.env.WYRE_ACCOUNT_ID}
        baseUrl="https://cors-anywhere.herokuapp.com/"
      >
        <App />
      </SendWyre>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById("root"),
  document.body.classList.add("loaded")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
