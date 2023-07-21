import { IconType } from "react-icons";

export interface ISidebarLink {
    title: string;
    icon: IconType;
    path: string;
    navbarHeading: string
}

export interface INew {
    date: number;
    text: string;
}