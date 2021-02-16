import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import Movies from "../components/movie/Movies";
import NotFound from "../components/base/NotFound";
import MovieDetail from "../components/movie/MovieDetail";
import Search from "../components/Search";

const links = [
  { link: "/", title: "Home", component: Home, isExact: true, isLink: true },
  {
    link: "/search",
    title: "Search",
    component: Search,
    isExact: false,
    isLink: false
  },
  {
    link: "/movies",
    title: "Explore Movies",
    component: Movies,
    isExact: false,
    isLink: true
  },
  {
    link: "/about",
    title: "About",
    component: About,
    isExact: false,
    isLink: true
  },
  {
    link: "/contact",
    title: "Contact",
    component: Contact,
    isExact: true,
    isLink: true
  },
  {
    link: "/movie/:id",
    title: "Movies",
    component: MovieDetail,
    isExact: false,
    isLink: false
  },

  { link: "", title: "404", component: NotFound, isExact: false, isLink: false }
];

export default links;
