import emailIcon from '../images/Mail.svg';
import linkedinIcon from '../images/linkedin-svgrepo-com.svg';
import Facebook from '../images/footer-images/Facebook Icon.png';
import GitHub from '../images/footer-images/GitHub Icon.png';
import Instagram from '../images/footer-images/Instagram Icon.png';
import Twitter from '../images/footer-images/Twitter Icon.png';


export default function Content() {
    return (
        <section className="content-wrapper">
            <h1>Marouane Touzani</h1>
            <h2>full stack developer</h2>
            <a href="https://marouanetouzaniportfolio.vercel.app/">My Portfolio</a>

            <section className="social">
                <a href="mailto:marouane@gmail.com" className="email-btn">
                    <img src={emailIcon} alt="" className='sicon' />
                    <span>Email</span>
                </a>
    
                <a href="https://linkedin.com" className="linkedin-btn">
                    <img src={linkedinIcon} alt="" className='sicon' />
                    <span>LinkedIn</span>
                </a>
            </section>

            <section className="discriptions">
                <h2 className='dis-h2'>About</h2>
                <p className='dis-p'>I am a frontend developer with a particular interest in making things simple 
                    and automating daily tasks. I try to keep up with security and best practices, 
                    and am always looking for new things to learn.
                </p>

                <h2 className='dis-h2'>Interests</h2>
                <p className='dis-p'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur.
                    Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </section>

            <footer className='hellooox'>
                <img src={Facebook} alt="" />
                <img src={GitHub} alt="" />
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />
            </footer>
        </section>
    )
}
