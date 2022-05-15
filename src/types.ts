export interface MainContent {
    mainTitle: string;
    subTitle: string;
    socialLinks: SocialLinks;
    description: string;
    subSectionTitle: string;
    subSectionContent: Array<SubSection>
}

export interface SubSection {
    title: string
    description: string
    url: string;
    tags: Array<String>
}

export interface SocialLinks {
    linkedin: string;
    github: string;
    twitter: string;
    mailid: string;
    download: string;
}