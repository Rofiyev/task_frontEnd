import '../styles/global.css';
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}
