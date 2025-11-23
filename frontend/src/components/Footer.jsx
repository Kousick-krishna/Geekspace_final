import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://www.instagram.com/geekspace.in/?igsh=MTl0MTFqYTJ6dW0xeg%3D%3D" className="social-link">
              <span className="sr-only">Instagram</span>
              <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2C4.46243 2 2 4.46243 2 7.75V16.25C2 19.5376 4.46243 22 7.75 22H16.25C19.5376 22 22 19.5376 22 16.25V7.75C22 4.46243 19.5376 2 16.25 2H7.75ZM7.75 0H16.25C20.8507 0 24 3.14929 24 7.75V16.25C24 20.8507 20.8507 24 16.25 24H7.75C3.14929 24 0 20.8507 0 16.25V7.75C0 3.14929 3.14929 0 7.75 0ZM12 6.25C8.96243 6.25 6.25 8.96243 6.25 12C6.25 15.0376 8.96243 17.75 12 17.75C15.0376 17.75 17.75 15.0376 17.75 12C17.75 8.96243 15.0376 6.25 12 6.25ZM12 4C16.1487 4 19.5 7.35128 19.5 12C19.5 16.6487 16.1487 20 12 20C7.35128 20 4 16.6487 4 12C4 7.35128 7.35128 4 12 4ZM18.5 5C18.2239 5 18 4.77614 18 4.5C18 4.22386 18.2239 4 18.5 4C18.7761 4 19 4.22386 19 4.5C19 4.77614 18.7761 5 18.5 5Z" />
              </svg>
            </a>
            <a href="#" className="social-link">
              <span className="sr-only">Facebook</span>
              <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="social-link">
              <span className="sr-only">LinkedIn</span>
              <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <p className="footer-contact">
            <strong>Phone:</strong> +91 7305825218<br />
            <strong>Email:</strong> geekspace24by7@gmail.com
          </p>
          <p className="footer-text">
            © {new Date().getFullYear()} <strong>GeekSpace</strong>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
