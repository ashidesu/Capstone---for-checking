import leftNavigation from '../Components/SideBar.js';
import feed from '../Components/videoBox.js';
import rightNavigation from './rightNav.js';
{customElements.define('right-nav',rightNavigation);}
{customElements.define('left-nav', leftNavigation);}
{customElements.define('video-feed', feed);}
