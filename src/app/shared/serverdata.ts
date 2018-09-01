export class serverData {
    private question: string;
    private answer: string;
    private rating: number

    // constructor(private question1:string, private answe1r:string,private rating1:string){
    // }
    setQuestion(question:string){
        this.question=question;
    }
    setAnswer(answer:string){
        this.answer=answer;
    }
    setRating(rating:number){
        this.rating=rating;
    }
}