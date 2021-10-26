import './css/universal.css';
import './css/navbar.css';
import './css/home.css';
import './css/footer.css';
import './css/whyfivetran.css';
import './css/extractload.css';
import './css/transform.css';
import './css/embed.css';
import './css/applications.css';
import './css/databases.css';
import './css/events.css';
import './css/files.css';
import './css/rowcalculator.css';
import './css/customersupport.css';
import './css/databasereplication.css';
import './css/dataengineering.css';
import './css/datascience.css';
import './css/finance.css';
import './css/marketing.css';
import './css/casestudies.css';
import './css/findpartner.css';
import './css/systemintegrators.css';
import './css/faq.css';
import './css/aboutfivetran.css';
import './css/culture.css';
import './css/careers.css';
import './css/contactus.css';
import './css/legal.css';
import './css/subnav.css';
import './css/signup.css';
import './css/login.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Whyfivetran from './components/Whyfivetran';
import ExtractLoad from './components/ExtractLoad';
import Transform from './components/Transform';
import Embed from './components/Embed';
import Applications from './components/Applications';
import Databases from './components/Databases';
import Destinations from './components/Destinations';
import Events from './components/Events';
import Files from './components/Files';
import Functions from './components/Functions';
import RowCalculator from './components/RowCalculator';
import BuildvsBuy from './components/BuildvsBuy';
import CustomerSupport from './components/CustomerSupport';
import DatabaseReplication from './components/DatabaseReplication';
import DataEngineering from './components/DataEngineering';
import DataScience from './components/DataScience';
import Enterprise from './components/Enterprise';
import Finance from './components/Finance';
import Marketing from './components/Marketing';
import MarketingAgency from './components/MarketingAgency';
import ProductEngineering from './components/ProductEngineering';
import Sales from './components/Sales';
import DataAnalyticsBusinessIntelligence from './components/DataAnalyticsBusinessIntelligence';
import CaseStudies from './components/CaseStudies';
import FindPartner from './components/FindPartner';
import SystemIntegrators from './components/SystemIntegrators';
import TechnologyPartners from './components/TechnologyPartners';
import FAQ from './components/FAQ';
import AboutFivetran from './components/AboutFivetran';
import Culture from './components/Culture';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import Legal from './components/Legal';
import ScrollToTop from './components/ScrollToTop';
import Security from './components/Security';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/whyfivetran">
            <Whyfivetran />
          </Route>
          <Route exact path="/extractload">
            <ExtractLoad />
          </Route>
          <Route exact path="/transform">
            <Transform />
          </Route>
          <Route exact path="/embed">
            <Embed />
          </Route>
          <Route exact path="/applications">
            <Applications />
          </Route>
          <Route exact path="/databases">
            <Databases />
          </Route>
          <Route exact path="/destinations">
            <Destinations />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/files">
            <Files />
          </Route>
          <Route exact path="/functions">
            <Functions />
          </Route>
          <Route exact path="/rowcalculator">
            <RowCalculator />
          </Route>
          <Route exact path="/buildvsbuy">
            <BuildvsBuy />
          </Route>
          <Route exact path="/customersupport">
            <CustomerSupport />
          </Route>
          <Route exact path="/dataanalyticsbusinessintelligence">
            <DataAnalyticsBusinessIntelligence />
          </Route>
          <Route exact path="/databasereplication">
            <DatabaseReplication />
          </Route>
          <Route exact path="/dataengineering">
            <DataEngineering />
          </Route>
          <Route exact path="/datascience">
            <DataScience />
          </Route>
          <Route exact path="/enterprise">
            <Enterprise />
          </Route>
          <Route exact path="/finance">
            <Finance />
          </Route>
          <Route exact path="/marketing">
            <Marketing />
          </Route>
          <Route exact path="/marketingagency">
            <MarketingAgency />
          </Route>
          <Route exact path="/productengineering">
            <ProductEngineering />
          </Route>
          <Route exact path="/sales">
            <Sales />
          </Route>
          <Route exact path="/casestudies">
            <CaseStudies />
          </Route>
          <Route exact path="/findpartner">
            <FindPartner />
          </Route>
          <Route exact path="/systemintegrators">
            <SystemIntegrators />
          </Route>
          <Route exact path="/technologypartners">
            <TechnologyPartners />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/aboutfivetran">
            <AboutFivetran />
          </Route>
          <Route exact path="/culture">
            <Culture />
          </Route>
          <Route exact path="/careers">
            <Careers />
          </Route>
          <Route exact path="/contactus">
            <ContactUs />
          </Route>
          <Route exact path="/legal">
            <Legal />
          </Route>
          <Route exact path="/security">
            <Security />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
