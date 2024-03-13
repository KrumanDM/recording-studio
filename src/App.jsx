import { useState, useEffect } from "react";
import s from "./App.module.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";
import { Arrow } from "./Arrow";


function App() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [showButton, setShowButton] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

   return (
    <>
{isMobile ? (
      <div className={s.appContainer}>

  <Sidebar open={open} handleClose={handleClose}/>
  <Header handleOpen={handleOpen} open={open}/>
  
  <Main/>
  <Footer/>
  {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={s.backToTopButton}
        >
          <Arrow/>
        </button>
      )}
  </div>
) : (
  <div className={s.appContainer}>
  <Header handleOpen={handleOpen} open={open} />
      <Main />
      <Footer />
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={s.backToTopButton}
        >
          <Arrow/>
        </button>
      )} 
    </div>
  )}
</>
   )}
export default App;