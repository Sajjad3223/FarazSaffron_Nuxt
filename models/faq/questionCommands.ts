
export interface CreateQuestionCommand{
    title:string;
    answer:string;
}
export interface EditQuestionCommand{
    questionId:number;
    title:string;
    answer:string;
}