import { IAlumni, INew, IProfile, IResearch, IResearchAssisstants, ISidebarLink, ITeaching } from "../types";
import { FaBook, FaGraduationCap } from "react-icons/fa"
import { BsCalendarWeekFill } from "react-icons/bs"
import { BiSearchAlt2 } from "react-icons/bi"
import { HiUserGroup } from 'react-icons/hi'
import { MdContactPhone } from 'react-icons/md'
import { NaturalProcessing, SocialMedia } from "../assets";

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

export const intro: string = `
The Minds, Machine, and Society group is led by <#FF6737>Prof. Soroush Vosoughi</#FF6737>,  an assistant professor of [computer 
science at Dartmouth](https://web.cs.dartmouth.edu/). Our research focuses on the intersection of <#FF6737>natural language processing (NLP), machine 
learning (ML), network science,</#FF6737> and <#FF6737> social media analytics </#FF6737>, with a particular emphasis in social NLP and 
computational social science. We are particularly interested in studying <#FF6737>large language models (LLMs)</#FF6737> and their
 anti-social tendencies, such as bias, toxicity, and lack of alignment with human moral values, with the goal
  of making them more <#FF6737>prosocial</#FF6737>. To accomplish this, we work on interpretability methods to better understand 
  the inner workings of LLMs (which tend to be black boxes), inference-time guidance of LLMs through 
  reinforcement learning and other techniques, and grounding LLMs using simulations. Our group also explores 
  fine-tuning strategies for LLMs, such as few-shot learning, prompt-based methods, and data augmentation. 
  Additionally, we use LLMs, in combination with classical NLP and graph representation learning, to create 
  computational tools for investigating social systems and issues, such as political polarization, bias, 
  propaganda, rumors, and hate speech. Recently, we have expanded our research to include the application of 
  large language models to the health and bioinformatics domains.
`

export const description: string = `
Prof. Vosoughi is a recipient of the <#FF6737> Google Research Scholar Award</#FF6737> in 2022 and an<#FF6737> Amazon Research Award</#FF6737> in 
2019, and his work has earned several best paper awards and nominations, including the [outstanding paper award 
at AAAI 2021](https://aaai.org/conference/aaai/aaai-21/aaai-outstanding-and-distinguished-papers/). 
He is a faculty member of the [Institute for Security, Technology, and Society (ISTS)](https://ists.dartmouth.edu/) and a 
faculty affiliate of the [Quantitative Social Science (QSS) program](https://qss.dartmouth.edu/), the [Quantitative Biomedical Sciences (QBS)](https://geiselmed.dartmouth.edu/qbs/)
program, and the [Arthur L. Irving Institute for Energy & Society](https://irving.dartmouth.edu/) at Dartmouth. Before joining Dartmouth, Prof. 
Vosoughi was a <#FF6737>postdoctoral associate at MIT</#FF6737> and a <#FF6737>fellow</#FF6737> and later an affiliate at the Berkman Klein Center at 
<#FF6737>Harvard University</#FF6737>. During his time as a postdoc at MIT, he was the <#FF6737>technical director</#FF6737> of the ["Electome"](https://www.media.mit.edu/projects/the-electome-measuring-responsiveness-in-the-2016-election/overview/)
project. His team of graduate and undergraduate students developed a collection of tools for detecting and 
categorizing election-related content on Twitter, and they were invited to be an official partner of the 
Commission on Presidential Debates during the 2016 elections. In addition, Prof. Vosoughi served as a technical 
advisor to the nonprofit organizations Public Mind <#FF6737>(formerly Because Humanity)</#FF6737>, a nonprofit using AI focused on 
developing AI systems that foster a healthier online public sphere, and [Cortico](https://cortico.ai/), a nonprofit that builds 
systems for a healthier public dialogue, from 2021 to 2023 and 2016 to 2019, respectively. He received his <#FF6737>Ph.
D., MSc, and BSc from MIT</#FF6737> in 2015, 2010, and 2008.
`

export const news: INew[] = [
    {
        date: 1632931200000,
        text: `
    Excited to participate in a panel titled "Is It Real or Is It AI?" at the [2023 New Hampshire Digital Government Summit](https://events.govtech.com/New-Hampshire-Digital-Government-Summit.html) on the ethics, challenges, and promises of generative AI.
    `
    },
    {
        date: 1632931200000,
        text: `
    Excited to participate in a panel titled "Is It Real or Is It AI?" at the [2023 New Hampshire Digital Government Summit](https://events.govtech.com/New-Hampshire-Digital-Government-Summit.html) on the ethics, challenges, and promises of generative AI.
    `
    },
    {
        date: 1632931200000,
        text: `
    Excited to participate in a panel titled "Is It Real or Is It AI?" at the [2023 New Hampshire Digital Government Summit](https://events.govtech.com/New-Hampshire-Digital-Government-Summit.html) on the ethics, challenges, and promises of generative AI.
    `
    },
]

export const researches: IResearch[] = [
    {
        heading: "Natural Language Processing & Machine Learning",
        subheading: "Our work on natural language processing and machine learning includes:",
        concepts: [
            "Developing interpretability methods for Large Language Models",
            "Guided natural language generation using Large Language Models",
            "Detecting and mitigating antisocial tendencies of Large Language Models, such as bias and lack of alignment with human moral values",
            "Using Transformer-based models",
            "Understanding, modeling, and transferring style in text",
            "Exploring prompt-based and few-shot learning"
        ],
        image: NaturalProcessing
    },
    {
        heading: "Social Media Analytics, Computational Social Science, and Graphs",
        subheading: "Our work in social media analytics, computational social science, and graphs includes:",
        concepts: [
            "Extracting information from noisy user-generated text",
            "Modeling user behavior (e.g., behavioral modeling, demographic/psychometric classification, etc.)",
            "Modeling malicious behavior (e.g., influence campaigns, propaganda, etc.)",
            "Modeling information diffusion in networks",
            "Using representation learning on graphs"
        ],
        image: SocialMedia
    },
]

export const teachings: ITeaching[] = [
    {
        title: "Machine Learning and Statistical Data Analysis",
        url: "http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-74",
        metadata: "Winter 2023, Spring 2022, Winter 2022, Fall 2021, Spring 2021, Spring 2020, Fall 2019"
    },
    {
        title: "Foundations of Applied Computer Science",
        url: "https://dartmouth.smartcatalogiq.com/en/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-70",
        metadata: "Fall 2023"
    },
    {
        title: "Artificial Intelligence",
        url: "https://dartmouth.smartcatalogiq.com/en/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-70",
        metadata: "Fall 2022"
    },
    {
        title: "Data Mining and Knowledge Discovery",
        url: "https://dartmouth.smartcatalogiq.com/en/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-70",
        metadata: "Fall 2023, Winter 2021, Spring 2019"
    },
    {
        title: "Responsible and Ethical Conduct of Research Fall 2023, Fall 2022",
        url: "https://dartmouth.smartcatalogiq.com/en/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-70",
        metadata: "Fall 2023, Fall 2022"
    },
    {
        title: "Network Science and Complex Systems Winter 2020",
        url: "https://dartmouth.smartcatalogiq.com/en/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-70",
        metadata: "Winter 2020"
    },
]

export const profile: IProfile = {
    name: "Soroush Vosoughi",
    roles: [
        "Assistant Professor of Computer Science, Dartmouth College",
        "Faculty Member, the Institute for Security, Technology and Society (ISTS), Dartmouth College",
        "Faculty Affiliate, Graduate Program in Quantitative Social Science (QSS), Dartmouth College",
        "Faculty Affiliate, Graduate Program in Quantitative Biomedical Sciences (QBS), Dartmouth College",
        "Faculty Affiliate, Arthur L. Irving Institute for Energy & Society, Dartmouth College"
    ],
    phdStudents: [
        {
            url: "https://www.cs.dartmouth.edu/~rbliu/",
            name: "Ruibo Liu"
        },
        {
            url: "https://web.cs.dartmouth.edu/people/lili-wang",
            name: "Lili Wang"
        },
        {
            url: "#",
            name: "Weicheng Ma "
        },
        {
            url: "https://web.cs.dartmouth.edu/people/xiaobo-guo",
            name: "Xiaobo Guo"
        },
        {
            url: "https://www.cs.dartmouth.edu/~yirenjian/",
            name: "Yiren Jian"
        },
        {
            url: "#",
            name: "Sean Xie (jointly with Prof. Saeed Hassanpour, Geisel School of Medicine)"
        }
    ],
    visitingScholar: {
        url: "https://neetip.github.io/",
        name: "Neeti Pokhriyal"
    },
    mastersStudents: [
        "Zhiyan Zhong (MSc in Computer Science)",
        "Zachary S. Gottesman (MSc in Computer Science) ",
        "Timothy Yang (MSc in Computer Science)",
        "Chenhao Zhao (MSc in Quantitative Biomedical Sciences)"
    ],
    undergraduateStudents: [
        "Sarah M. Chacko (Senior Thesis in Computer Science) ",
        "Samiha Datta (Senior Thesis in Computer Science) ",
        "Anders Knospe (Senior Thesis in Computer Science)",
        "Rishik Lad(Senior Thesis in Computer Science) "
    ]
}

export const alumni:IAlumni = {
    postDocs: {
        url: "https://neetip.github.io/",
        name: "Neeti Pokhriyal",
        metadata: "(jointly with Prof. Benjamin Valentino; 2019-2021)"
    },
    mscTheses: [
        "Joseph Hajjar (MSc in Computer Science; 2022)",
        "Sucharita Jayanti (MSc in Computer Science; 2021)"
    ],
    undergraduateSeniorTheses: [
        "Tracey E. Mills (Senior Thesis in Computer Science; 2022)",
        "Anne Bailey (Senior Thesis in Computer Science; 2022)",
        "Caroline Tornquist (Senior Thesis in Computer Science; 2022)",
        "Junhwi Kim (Senior Thesis in Computer Science; 2022)"
    ]
}

export const researchAssisstants:IResearchAssisstants = {
    phdStudents: [
        "Weiyi Wu (BMDS rotation student)"
    ],
    mastersStudents: [
        "Aadil Islam",
        "Chongyang Gao",
        "Anmol Chachra",
        "Aarish Iyer",
    ],
    undergraduateStudents: [
        "Clayton Bass",
        "Tyler Brody",
        "Daniel DiPietro",
        "Danielle Fang"
    ]
}