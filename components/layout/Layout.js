import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, description}) => {
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta
          name="description"
          key="description"
          content={description}
        />
      </Head>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
      <style jsx global>
        {`
          header {
            background: #ffd319;
            height: 20vh;
          }

          main {
            background: #ff2975;
            height: 60vh;
            text-align: center;
            padding: 2rem;
          }
          
          footer {
            background: #8C1EFF;
            height: 20vh;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
