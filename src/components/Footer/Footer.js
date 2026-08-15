import Brand from "../Brand/Brand";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Brand label="Back to the top" variant="footer" />
      <p className="footer__location">React.js developer based in Egypt.</p>
      <p className="footer__copyright">
        Copyright {currentYear} Ahmed Gomaa
      </p>
    </footer>
  );
}

export default Footer;
