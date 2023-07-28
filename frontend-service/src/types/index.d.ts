import { IconType } from "react-icons";
import { NonIndexRouteObject } from "react-router-dom";

export interface ISidebarLink {
    title: string;
    icon: IconType;
    path: string;
    navbarHeading: string
}


export interface IResearch {
    heading: string;
    subheading: string;
    concepts: string[];
    image: string;
}

export interface ITeaching {
    url: string;
    title: string;
    metadata: string
}

export interface IProfile {
    name: string;
    roles: string[];
    phdStudents: { name: string; url: string }[]
    visitingScholar: { name: string; url: string };
    mastersStudents: string[];
    undergraduateStudents: string[]
}

export interface IAlumni {
    postDocs: {
        url: string;
        name: string;
        metadata: string
    };
    mscTheses: string[];
    undergraduateSeniorTheses: string[]
}

export interface IResearchAssisstants {
    phdStudents: string[];
    mastersStudents: string[];
    undergraduateStudents: string[]
}

export interface ILoginData {
    username: string,
    password: string,
    showPassword: boolean
}

export interface INews {
    _id?: string
    title: string,
    text: string,
    created_at?: Number
}

export interface IPublication {
    _id?: string
    title: string,
    articles: {
        name: string
        collaborators: string
        time: string
        description: string
    }[],
    created_at?: Number
}
