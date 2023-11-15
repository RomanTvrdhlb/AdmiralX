import Splide from "../vendor/splide";
import vars from '../_vars';
const {slider} = vars;

slider && new Splide( slider, {
  type   : 'loop',
  perPage: 1,
  arrows: false,
  gap: 10,
  speed: 150,
  autoplay: true,
} ).mount();
