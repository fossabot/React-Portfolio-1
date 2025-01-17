import s from './Footer.module.scss';
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
  FaLinkedinIn,
} from 'react-icons/all';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Snaichuk Volodumur</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} SV</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a href="https://github.com/" className={s.socialIcon}>
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className={s.socialIcon}>
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className={s.socialIcon}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className={s.socialIcon}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
