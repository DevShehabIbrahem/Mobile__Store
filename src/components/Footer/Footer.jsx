import "./Footer.scss";
import words from "../../words";

const Footer = () => {
  const { footerImage, footerCopyRight } = words;
  return (
    <div className="footer">
      <div className="footer__wrapper">
        {footerImage?.map((ele, i) => (
          <div className="footer__imgs" key={i}>
            <img src={ele.img} alt="apple-img" />
          </div>
        ))}

        <span>{footerCopyRight}</span>
      </div>
    </div>
  );
};

export default Footer;
