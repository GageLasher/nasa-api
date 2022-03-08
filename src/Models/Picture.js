export class Picture{
    constructor(data){
        this.imgUrl = data.hdurl
        this.explanation = data.explanation
        this.data = data.date
        this.author = data.copyright
    }
}