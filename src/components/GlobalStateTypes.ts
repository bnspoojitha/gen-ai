export enum chatTypes {
    Answer = "Answer",
    Question = "Question",
    Chart = "Chart",
    Message = "Message",
    Data = "Data", 
  }
  
  export type Chat = {
    text: string;
    type: chatTypes;
    data?: any[]; 
  };