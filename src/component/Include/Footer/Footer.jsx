// src/components/Footer.jsx

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // If you're using React Router

const Footer = () => {
  return (
    <Footer className="bg-[#1e0f28] text-white py-10 px-6 md:px-20">
        <Container>
            <Row>
                <Col lg={3} md={6} sm={12} className="mb-4">
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/services/mobile-app">Mobile App</Link></li>
                        <li><Link to="/services/micro-services">Micro Services</Link></li>
                        <li><Link to="/services/cloud">Cloud Services</Link></li>
                        <li><Link to="/services/migration">Migration</Link></li>
                        <li><Link to="/services/devops">Dev Ops</Link></li>
                        <li><Link to="/services/ai">Artificial Intelligence</Link></li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className="mb-4">
                    <h3 className="text-lg font-semibold mb-4">Technology</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/technology/react">React</Link></li>
                        <li><Link to="/technology/magento">Magento</Link></li>
                        <li><Link to="/technology/nodejs">Node Js</Link></li>
                        <li><Link to="/technology/ui-figma">UI – Figma</Link></li>
                        <li><Link to="/technology/laravel">Laravel</Link></li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className="mb-4">
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/case-study">Case Study</Link></li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className="mb-4">
                    <h3 className="text-lg font-semibold mb-4">Policies</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/recruitment-privacy-policy">Recruitment Privacy Policy</Link></li>
                        <li><Link to="/cookies">Cookies</Link></li>
                        <li><Link to="/cookies-settings">Cookies Settings</Link></li>
                        <li><Link to="/feedback">Feedback</Link></li>
                        <li><Link to="/security">Security</Link></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12} className="mb-4">
                    <div className="d-flex">
                        <Link to="/"><img src="logo.png" alt="Logo" className="h-10 mr-4" /></Link>
                        <Link to="/"><img src="logo.png" alt="Logo" className="h-10 mr-4" /></Link>
                    </div>
                </Col>
                <Col lg={6} md={12} className="text-right">
                    <div className="flex justify-end space-x-4">
                        <Link to="/"><FaFacebookF className="text-white text-xl" /></Link>
                        <Link to="/"><FaInstagram className="text-white text-xl" /></Link>
                        <Link to="/"><FaLinkedinIn className="text-white text-xl" /></Link>
                        <Link to="/"><FaTwitter className="text-white text-xl" /></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </Footer>
    
       

        
  );
};

export default Footer;
