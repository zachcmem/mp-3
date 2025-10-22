
import { RouterProvider, Route, Routes, createBrowserRouter} from 'react-router-dom';
import {GlobalStyle} from "./styles/GlobalStyle";
import Header from "./sections/Header";
// {} syntax is because Align is not function but exported const
import { Align } from "./align/Align"; 
import { AlignNav } from "./align/AlignNav"; 
import { AlignMain } from "./align/AlignMain";
import Navigation from './sections/Navigation';
import Main from './sections/Main';
import Home from './sites/Home';
import Education from './sites/Education';
import Experience from './sites/Experience';
import Projects from './sites/Projects';
import Skills from './sites/Skills';
import Leadership from './sites/Leadership';
import Footer from "./sections/Footer";

function Root(){
  return(
    <>
      <GlobalStyle />
      <Header />
      <Align>
        <AlignNav>
          <Navigation/> 
        </AlignNav>
        <AlignMain>
          <Main>
            <Routes>
              <Route path="/*" element={<Home/>}/>
              <Route path="/Education/*" element={<Education/>}/>
              <Route path="/Experience/*" element={<Experience/>}/>
              <Route path="/Projects/*" element={<Projects/>}/>
              <Route path="/Skills/*" element={<Skills/>}/>
              <Route path="/Leadership/*" element={<Leadership/>}/>
            </Routes>
          </Main>
        </AlignMain>
      </Align>
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  [{path: "*", Component: Root}]
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
