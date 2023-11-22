import React from 'react'
import { Outlet} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

export default function Root() {
    return (
        <div className="root-layout">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
    )
}
