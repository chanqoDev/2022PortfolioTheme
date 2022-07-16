import Home01 from './Home01';
import Explore01 from './Explore01';
import Explore02 from './Explore02';
import LiveAuctions from './LiveAuctions';
import ItemDetails01 from './ItemDetails01';
import ItemDetails02 from './ItemDetails02';
import ItemDetails03 from './ItemDetails03';
import ItemDetails04 from './ItemDetails04';
import ItemDetails05 from './ItemDetails05';
import Activity01 from './Activity01';
import Activity02 from './Activity02';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import HelpCenter from './HelpCenter';
import Authors01 from './Authors01';
import Authors02 from './Authors02';
import CreateItem from './CreateItem';
import Ranking from './Ranking';
import NoResult from './NoResult';
import FAQ from './FAQ';
import Contact02 from './Contact02';

const routes = [
  { path: '/', component: <Home01 /> },
  { path: '/explore-01', component: <Explore01 /> },
  { path: '/explore-02', component: <Explore02 /> },
  { path: '/live-auctions', component: <LiveAuctions /> },
  { path: '/item-details-01', component: <ItemDetails01 /> },
  { path: '/item-details-02', component: <ItemDetails02 /> },
  { path: '/ItemDetails03', component: <ItemDetails03 /> },
  { path: '/item-details-04', component: <ItemDetails04 /> },
  { path: '/item-details-05', component: <ItemDetails05 /> },
  { path: '/activity-01', component: <Activity01 /> },
  { path: '/activity-02', component: <Activity02 /> },
  { path: '/blog', component: <Blog /> },
  { path: '/blog-details', component: <BlogDetails /> },
  { path: '/help-center', component: <HelpCenter /> },
  { path: '/authors-01', component: <Authors01 /> },
  { path: '/authors-02', component: <Authors02 /> },
  { path: '/create-item', component: <CreateItem /> },
  { path: '/ranking', component: <Ranking /> },
  { path: '/no-result', component: <NoResult /> },
  { path: '/faq', component: <FAQ /> },
  { path: '/contact-02', component: <Contact02 /> },
];

export default routes;
