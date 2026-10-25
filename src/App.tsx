import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WaterHeaters from './components/WaterHeaters';
import ServiceAreas from './components/ServiceAreas';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return <div className="min-h-screen bg-slate-50 text-slate-900">
    <div className="bg-amber-100 text-amber-950 text-center px-4 py-2 text-xs sm:text-sm font-semibold">PRIVATE PROJECT DEMO — Business details, service scope, imagery and publishing require Jeremy's approval.</div>
    <Navbar/><main><Hero/><Services/><WaterHeaters/><ServiceAreas/><About/><Contact/></main><Footer/>
  </div>;
}
