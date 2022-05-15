export interface MainContent {
    mainTitle: string;
    subTitle: string;
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