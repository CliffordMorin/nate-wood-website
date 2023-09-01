import { FaHome, FaInfoCircle, FaVideo } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { TbVinyl } from "react-icons/tb";
import {
  BsFillCameraFill,
  BsCalendarEventFill,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import { AiFillPicture, AiFillMail } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GrDocumentDownload } from "react-icons/gr";
import { ImHeadphones } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";

const navLinksDesktop = [
  { page: "Home", link: "/", id: uuidv4(), icon: FaHome },
  {
    page: "About",
    id: uuidv4(),
    icon: FaInfoCircle,
    children: [
      { page: "BIO", link: "/bio", id: uuidv4(), icon: TfiWrite },
      // {
      //   page: "DISCOGRAPHY",
      //   link: "/discography",
      //   id: uuidv4(),
      //   icon: TbVinyl,
      // },
    ],
  },
  {
    page: "Media",
    id: uuidv4(),
    icon: BsFillCameraFill,
    children: [
      // { page: "VIDEOS", link: "/videos", id: uuidv4(), icon: FaVideo },
      {
        page: "PICTURES",
        link: "/pictures",
        id: uuidv4(),
        icon: AiFillPicture,
      },
      // {
      //   page: "RECORDINGS",
      //   link: "https://drive.google.com/drive/folders/19uEMozTc4QDnKB9N3b7fM50tOVZCFBqF",
      //   id: uuidv4(),
      //   icon: ImHeadphones,
      // },
    ],
  },
  {
    page: "PORTFOLIO",
    link: "/calendar",
    id: uuidv4(),
    icon: BsFillBriefcaseFill,
  },
  { page: "CONTACT", link: "/contact", id: uuidv4(), icon: AiFillMail },
];

export default navLinksDesktop;
