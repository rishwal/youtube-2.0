import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import { PiUserSquare } from "react-icons/pi";
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import { RiVideoLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import ContentCutRoundedIcon from '@mui/icons-material/ContentCutRounded';
import { GoChevronDown } from "react-icons/go";



export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categories = [
    { name: 'Home', icon: GoHomeFill, },
    { name: 'Shorts', icon: SiYoutubeshorts, },
    { name: 'Subscription', icon: SubscriptionsRoundedIcon, },
    { name: 'Your Channel', icon: PiUserSquare, },
    { name: 'History', icon: HistoryRoundedIcon, },
    { name: 'Your videos', icon: RiVideoLine },
    { name: 'Watch Later', icon: FaRegClock, },
    { name: 'Your clips', icon: ContentCutRoundedIcon, },
    { name: 'Show more', icon: GoChevronDown, },

];