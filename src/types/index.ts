export interface AudioFile {
    filename: string;
    mimetype: string;
    size: number;
}

export interface TextResult {
    text: string;
    confidence: number;
}