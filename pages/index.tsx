import type { NextPage } from "next";
import Head from "next/head";
import FirstView from "../components/FirstView";
import Features from "../components/Features";
import Deploy from "../components/Deploy";
import Compare from "../components/Compare";
import Footer from "../components/Footer";
import Booking from "../components/Booking";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VoceChat Website</title>
        <meta name="description" content="Welcome to vocechat" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#527ff1" />
        <meta name="description" content="Your private chat APP" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={"privoce1"} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={"https://voce.chat"} key="ogurl" />
        <meta property="og:image" content={"/android-chrome-512x512.png"} key="ogimage" />
        <meta property="og:site_name" content={"VoceChat"} key="ogsitename" />
        <meta property="og:title" content={"VoceChat"} key="ogtitle" />
        <meta property="og:description" content={"Your perivate chat APP"} key="ogdesc" />
        <link
          href="/splash/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splash/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splash/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splash/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splash/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splash/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splash/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splash/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splash/ipadpro3_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splash/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </Head>

      <main>
        <FirstView />
        <Features />
        <Deploy />
        <Compare />
        <Booking />
      </main>

      <Footer />
    </>
  );
};

export default Home;
