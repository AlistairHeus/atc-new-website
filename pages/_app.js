import "../styles/index.css";
import Nav from "../components/Navbar";
import Footer from "../components/footer";

import "bootstrap/dist/css/bootstrap.min.css";

import dynamic from "next/dynamic";

const WhatsAppWidget = dynamic(() => import("react-whatsapp-chat-widget"), {
  ssr: false,
});

import "react-whatsapp-chat-widget/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />

      <Component {...pageProps} />
      <WhatsAppWidget
        phoneNo="918605640371"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="260px"
        autoOpen={true}
        autoOpenTimer={5000}
        messageBox={true}
        messageBoxTxt=""
        iconSize="40"
        iconColor="white"
        iconBgColor="tomato"
        headerIcon="/svgs/aarkay.png"
        headerIconColor="pink"
        headerTxtColor="black"
        headerBgColor="tomato"
        headerTitle="Admin"
        headerCaption="Online"
        bodyBgColor="#bbb"
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋 <br />
            <br /> How can I help you?
          </>
        }
        footerBgColor="#999"
        btnBgColor="yellow"
        btnTxtColor="black"
        btnTxt="Start Chat"
      />
      <Footer />
    </>
  );
}
