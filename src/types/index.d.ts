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

export interface IResearch {
    heading: string;
    subheading: string;
    concepts: string[];
    image: string;
}

export interface ITeaching {
    url: string,
    title: string,
    metadata: string
}