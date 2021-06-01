

export interface IButton {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    content: string;
    title?: string;
}

export interface IAnchor {
    content: string;
    title?: string;
    to: string;
}

export interface IArticle {
    title: string;
    subtitle?: string;
    paragraphs: string[];
}