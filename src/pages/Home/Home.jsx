import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import style from './home.module.scss';
import logo from './../../assets/images/logo.png';
import heroImg from './../../assets/images/hero1.png';
import heroChart from './../../assets/images/heroChart.svg';
import menuIcon from './../../assets/icons/menu-icon.svg';
import closeIcon from './../../assets/icons/close.svg';
import clockIcon from './../../assets/icons/clock.svg';
import computerIcon from './../../assets/icons/computer.svg';
import rocketIcon from './../../assets/icons/rocket.svg';
import lineChart from './../../assets/images/lineChart.svg';
import barChart from './../../assets/images/barChart.svg';
import calendar from './../../assets/images/calendar.svg';
import facebook from './../../assets/icons/facebook.svg';
import instagram from './../../assets/icons/instagram.svg';
import twitter from './../../assets/icons/twitter.svg';
import logoFooter from './../../assets/images/logo-footer.png';


export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setWindowSize({ width: window.screen.width, height: window.screen.height })

        window.addEventListener("resize", (e) => {
            setWindowSize({ width: window.screen.width, height: window.screen.height })
        })
    }, [])
    
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
                <section className={`sectionx ${style.features}`}>
                    <h2 className={style.title}>Main Features</h2>
                    <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
                    <div className={style.content}>
                        <div className={style.item}>
                            <div className={style.img}>
                                <img src={clockIcon} alt="Monitoring" draggable="false" />
                            </div>
                            <div className={style.title}>Monitoring 24/7</div>
                            <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.img}>
                                <img src={computerIcon} alt="Widgets" draggable="false" />
                            </div>
                            <div className={style.title}>Widget System</div>
                            <div className={style.text}>Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar.</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.img}>
                                <img src={rocketIcon} alt="Performance" draggable="false" />
                            </div>
                            <div className={style.title}>Best Performance</div>
                            <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.</div>
                        </div>
                    </div>
                </section>
                <section className={`sectionx ${style.infoSection}`}>
                    <div className={style.info}>
                        <div className={style.title}>Automated Reports & Widget Alerts</div>
                        <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</div>
                    </div>
                    <div className={style.img}>
                        <img src={lineChart} alt="Chart" draggable="false" />
                    </div>
                </section>
                <section className={`sectionx ${style.infoSection} ${style.infoSectionV2}`}>
                    <div className={style.info}>
                        <div className={style.title}>Fully customizable to address your needs</div>
                        <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</div>
                    </div>
                    <div className={style.img}>
                        <img src={barChart} alt="Chart" draggable="false" />
                    </div>
                </section>
                <section className={`sectionx ${style.infoSection}`}>
                    <div className={style.info}>
                        <div className={style.title}>Pre-built Dashboard Templates</div>
                        <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</div>
                    </div>
                    <div className={style.img}>
                        <img src={calendar} alt="Calendar" draggable="false" />
                    </div>
                </section>
                <section className={style.pricing}>
                    <div className={`${style.wrapper}`}>
                        <div className={style.title}>Pricing Plans</div>
                        <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est.</div>
                        <Swiper
                            spaceBetween={windowSize.width < 1190 ? 20 : 80}
                            initialSlide={1}
                            allowTouchMove={window.screen.width < 1000}
                            slidesPerView={'auto'}
                            centeredSlides={true}
                            className={style.slider}
                        >
                            <SwiperSlide className={style.slide}>
                                <div className={style.item}>
                                    <div className={style.title}>Starter</div>
                                    <div className={style.users}>up to 3 users</div>
                                    <div className={style.divider}></div>
                                    <div className={style.price}><span className={style.currency}>$</span>29</div>
                                    <div className={style.perText}>per month</div>
                                    <div className={style.btn}>Order</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={style.slide}>
                                <div className={`${style.item} ${style.active}`}>
                                    <div className={style.title}>Standard</div>
                                    <div className={style.users}>up to 20 users</div>
                                    <div className={style.divider}></div>
                                    <div className={style.price}><span className={style.currency}>$</span>99</div>
                                    <div className={style.perText}>per month</div>
                                    <div className={style.btn}>Order</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={style.slide}>
                                <div className={style.item}>
                                    <div className={style.title}>Premium</div>
                                    <div className={style.users}>up to 200 users</div>
                                    <div className={style.divider}></div>
                                    <div className={style.price}><span className={style.currency}>$</span>299</div>
                                    <div className={style.perText}>per month</div>
                                    <div className={style.btn}>Order</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </main>
            <footer className={`sectionx ${style.footer}`}>
                <div className={style.line}></div>
                <div className={style.content}>
                    <Link to="/" className={style.logo}>
                        <img src={logoFooter} alt="Analytics" />
                    </Link>
                    <div className={style.menu}>
                        <Link to="/" className={style.item}>Product</Link>
                        <Link to="/" className={style.item}>Pricing Plans</Link>
                        <Link to="/" className={style.item}>FAQ</Link>
                        <Link to="/" className={style.item}>Blog</Link>
                    </div>
                    <div className={style.socials}>
                        <Link to="/" className={style.social}>
                            <img src={facebook} alt="Facebook" />
                        </Link>
                        <Link to="/" className={style.social}>
                            <img src={twitter} alt="Twitter" />
                        </Link>
                        <Link to="/" className={style.social}>
                            <img src={instagram} alt="Instagram" />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
