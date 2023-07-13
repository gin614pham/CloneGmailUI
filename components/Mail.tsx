export default class Mail {
    private id: string;
    private title: string;
    private body: string;
    private time: string;
    private image: string;

    constructor(id: string, title: string, body: string, time: string, image: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.time = time;
        this.image = image;
    }

    getId(): string {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getBody(): string {
        return this.body;
    }

    getTime(): string {
        return this.time;
    }

    getImage(): string {
        return this.image;
    }
  
    
}