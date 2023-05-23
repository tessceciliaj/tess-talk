import { Fragment } from 'react';
import background from '../public/maxim-berg-ENIaPZytqzE-unsplash.jpg';
import { K2D } from 'next/font/google';

const k2d = K2D({ subsets: ['latin'], weight: '500' });


const Layout = ({ children }) => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
        className={k2d.className}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
