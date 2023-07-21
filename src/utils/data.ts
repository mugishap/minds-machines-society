import { ISidebarLink } from "../types";
import { FaBook, FaGraduationCap } from "react-icons/fa"
import { BsCalendarWeekFill } from "react-icons/bs"
import { BiSearchAlt2 } from "react-icons/bi"
import { HiUserGroup } from 'react-icons/hi'
import { MdContactPhone } from 'react-icons/md'

export const sidebarLinks: ISidebarLink[] = [
    {
        title: "About",
        path: "/",
        icon: FaBook,
        navbarHeading: "Minds, Machines and Society"

    },
    {
        title: "Publications",
        path: "/publications",
        icon: BsCalendarWeekFill,
        navbarHeading: "Publications"

    },
    {
        title: "Research",
        path: "/research",
        icon: BiSearchAlt2,
        navbarHeading: "Research"

    },
    {
        title: "Teaching",
        path: "/teaching",
        icon: FaGraduationCap,
        navbarHeading: "Teaching"

    },
    {
        title: "People",
        path: "/people",
        icon: HiUserGroup,
        navbarHeading: "People"

    },
    {
        title: "Contact",
        path: "/contact",
        icon: MdContactPhone,
        navbarHeading: "Contact"

    },
]