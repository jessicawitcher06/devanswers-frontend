import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer py-3 px-3 text-center">
      <small>
        &copy; {currentYear} DevAnswers. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;