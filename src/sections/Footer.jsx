import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials flex gap-5">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a
                href={socialImg.URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Vasu Sethiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

