import React, { Suspense } from 'react';
import './index.css';
import BackToTop from './components/UI/BackToTop';
import Spinner from './components/UI/Spinner';

const Navigation = React.lazy(() => import('./components/Navigation/Navigation'));
const Hero = React.lazy(() => import('./components/Hero/Hero'));
const Analytics = React.lazy(() => import('./components/Analytics/Analytics'));
const About = React.lazy(() => import('./components/About/About'));
const Features = React.lazy(() => import('./components/Features/Features'));
const Products = React.lazy(() => import('./components/Products/Products'));
const Testimonial = React.lazy(() => import('./components/Testimonial/Testimonial'));
const Brands = React.lazy(() => import('./components/Brands/Brands'));
const ServiceCard = React.lazy(() => import('./components/ServiceCard/ServiceCard'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const FooterBar = React.lazy(() => import('./components/UI/FooterBar'));

const App = () => {
	return (
		<div>
			<Suspense fallback={<Spinner />}>
				<Navigation />
				<div className='container'>
					<Hero />
					<Analytics />
					<About />
					<Features />
					<Products />
					<Testimonial />
					<Brands />
					<ServiceCard />
					<Footer />
				</div>
				<FooterBar />
				<BackToTop />
			</Suspense>
		</div>
	);
};

export default App;
