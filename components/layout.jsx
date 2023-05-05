import { Fragment } from 'react';
import background from '../public/maxim-berg-ENIaPZytqzE-unsplash.jpg';

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
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
