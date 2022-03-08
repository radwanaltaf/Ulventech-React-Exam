export interface FormResponse {
    success: boolean;
    message: string;
    data:    FormFields[];
}

export interface FormFields {
    fieldName: string;
    type:      string;
    value:     string;
    options?:  string[];
}

