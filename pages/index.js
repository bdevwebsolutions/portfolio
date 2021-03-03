import Head from 'next/head'

//Context
import ThemeProvider from '../context/themeContext';

//Components
import {BodyContainer} from '../styles/components/containers';
import Nav from '../components/nav/nav';
import ScrollTopButton from '../components/util/scrollTopButton';


//GlobalGrid (styling)
import {GlobalGrid} from '../styles/components/containers';

//ENTRY POINT FOR PORTFOLIO

export default function Home() {
  return (
    <ThemeProvider>
      <BodyContainer>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* BUTTON FOR SCROLLING TO TOP */}
        <ScrollTopButton/>
        {/*GRID FOR BACKGROUND STYLE*/}
        <GlobalGrid/>
        {/* NAV AND TOPBAR */}
        <Nav/>
      </BodyContainer>
    </ThemeProvider>
  )
}
