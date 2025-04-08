import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll in pagina în partea de sus la fiecare schimbare de pagina
    }, [pathname]); // Rulează efectul când pagina se schimbă

    return null;  //Nu avem nimic de afisat deci returnam null
}

export default ScrollToTop;