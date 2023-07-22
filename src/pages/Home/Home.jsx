import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './home.module.scss';
import logo from './../../assets/images/logo.png';
import heroImg from './../../assets/images/hero1.png';
import heroChart from './../../assets/images/heroChart.svg';
import menuIcon from './../../assets/icons/menu-icon.svg';
import closeIcon from './../../assets/icons/close.svg';

export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className={`sectionx ${style.navbar}`}>
                <div className={style.menuLeft}>
                    <Link to="/" className={style.logo}>
                        <img src={logo} alt="Analytics" />
                    </Link>
                    <div className={style.menu}>
                        <NavLink to="/" className={style.menuItem}>Products</NavLink>
                        <NavLink to="/" className={style.menuItem}>Pricing</NavLink>
                        <NavLink to="/" className={style.menuItem}>FAQ</NavLink>
                        <NavLink to="/" className={style.menuItem}>Blog</NavLink>
                        <NavLink to="/" className={style.menuItem}>Blog</NavLink>
                    </div>
                </div>
                <div className={style.menuFunctions}>
                    <div className={style.function}>Sign in</div>
                    <div className={style.btn}>Sign Up</div>
                    <div className={`${style.menuBtn} ${isMenuOpen && style.open}`} onClick={() => setIsMenuOpen(prev => !prev)}>
                        <img className={style.open} src={menuIcon} alt="Menu" draggable="false" />
                        <img className={style.close} src={closeIcon} alt="Menu Close" draggable="false" />
                    </div>
                </div>
                <div className={`${style.mobileMenu} ${isMenuOpen && style.open}`}>
                    <Link className={style.menuItem}>Products</Link>
                    <Link className={style.menuItem}>Pricing</Link>
                    <Link className={style.menuItem}>FAQ</Link>
                    <Link className={style.menuItem}>Blog</Link>
                    <Link className={style.menuItem}>Blog</Link>
                </div>
            </nav>
            <section className={style.hero}>
                <div className={`sectionx ${style.wrapper}`}>
                    <div className={style.content}>
                        <div className={style.info}>
                            <h1 className={style.title}>Monitor your business on real-time dashboard</h1>
                            <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.</p>
                            <Link to="/" className={style.btn}>Try for free</Link>
                        </div>
                        <div className={style.imgContainer}>
                            <div className={style.bars}>
                                <div className={style.barsContainer}>
                                    <div className={style.bar}>
                                        <img src={heroChart} alt="Chart" draggable="false" />
                                    </div>
                                </div>
                            </div>
                            <div className={style.img}>
                                <img src={heroImg} alt="Hero Image" draggable="false" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main className={style.main}>
                <section className={style.features}>
                    <h2 className={style.title}>Main Features</h2>
                    <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
                    <div className={style.content}>
                        <div className={style.item}>
                            <div className={style.img}></div>
                            <div className={style.title}>Monitoring 24/7</div>
                            <div className={style.text}></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
