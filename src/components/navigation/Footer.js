import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (

        <div>
            <div className="row">
            <div className="col-6">
                <h5>Anna Stania Productions</h5>
            </div>
            <div className="col-6">
                <SocialIcon url="https://www.linkedin.com/in/anna-stania/" />
                <SocialIcon url="https://github.com/astania"/>
                <SocialIcon url="https://medium.com/@annaestania"/>
            </div>
            </div>
        </div>

    );
}


export default Footer;