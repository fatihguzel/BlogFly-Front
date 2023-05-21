import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import Layout from "../components/Layouts";
import { store } from "../store/store";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>BlogFly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
