import './style.css';
import {ReactComponent as InstagramIcon } from './instagram.svg';
import {ReactComponent as LindedinIcon } from './linkedin.svg';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
const Footer = () => {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <YoutubeIcon/>
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LindedinIcon/>
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_new">
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
        
    );
}

export default Footer;