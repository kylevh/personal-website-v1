import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import { Switch, Route, useLocation } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import { useState, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import ClipLoader from "react-spinners/PuffLoader";
import { AnimatePresence, motion } from 'framer-motion';
import ParticleBackground from './Particles/ParticleBackground'

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300)
  }, [])

  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle)
  }

  const location = useLocation();


  return (
    <div className="App">
      {

        loading ?
          <div className="loading-holder">
            <ClipLoader className="loader" color={"#037FFF"} loading={loading} size={70} />
          </div>
          :
          <div className="MAINSTUFF">

            {/* SideBar Stuff */}
            <OutsideClickHandler
              onOutsideClick={() => {
                setNavToggle(false);
              }}>
              <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
                  <NavBar />
              </div>
            </OutsideClickHandler>
            <div className="nav-btn" onClick={navClick}>
              <div className="lines-1"></div>
              <div className="lines-2"></div>
              <div className="lines-3"></div>
            </div>

            {/* Main content Stuff */}
            <div className="main-content">
            <Route path='/' component={ParticleBackground} exact/>
              <div className="content">
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                      <HomePage />
                    </Route>
                    <Route path="/about" exact>
                      <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: .4 }} exit={{ opacity: 0 }}>
                        <AboutPage />
                      </motion.div>
                    </Route>
                    <Route path="/portfolio" exact>
                      <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: .4 }} exit={{ opacity: 0 }}>
                        <PortfolioPage />
                      </motion.div>
                    </Route>
                    <Route path="/blog" exact>
                      <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: .4 }} exit={{ opacity: 0 }}>
                        <BlogPage />
                      </motion.div>
                    </Route>
                    <Route path="/contact" exact>
                      <motion.div initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: .4 }} exit={{ opacity: 0 }}>
                        <ContactPage />
                      </motion.div>
                    </Route>
                  </Switch>
                </AnimatePresence>

              </div>
            </div>

          </div>
      }
    </div>
  );
}

export default App;
