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