import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="description">
          <img className="logo" src="/images/logo.svg" alt="" />
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div>
            <a href="/">
              <img src="/images/facebook.svg" alt="" />
            </a>
            <a href="/">
              <img src="/images/twitter.svg" alt="" />
            </a>
            <a href="/">
              <img src="/images/instagram.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="footer__company">
          <h6>Company</h6>
          <a className="footer__link" href="/">About</a>
          <a className="footer__link" href="/">Career</a>
          <a className="footer__link" href="/">Mobile</a>
        </div>
        <div className="footer__contact">
          <h6>Contact</h6>
          <a className="footer__link" href="/">Why travlog?</a>
          <a className="footer__link" href="/">Partner with us</a>
          <a className="footer__link" href="/">FAQ's</a>
          <a className="footer__link" href="/">Blog</a>
        </div>
        <div className="footer__meet">
          <h6>Meet Us</h6>
          <a className="footer__link" href="/">+00 92 1234 56789</a>
          <a className="footer__link" href="/">info@travlog.com</a>
          <a className="footer__link" href="/">205. R Street, New York BD23200</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
