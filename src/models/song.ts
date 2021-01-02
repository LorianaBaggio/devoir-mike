export default class song{
  
  private idSong: number;
  private name: string;
  private url: string;
  private time: number;
  private creation: string = '';
  private update: string = '';
  private type: string;


  constructor(id: number, songName: string, songUrl: string, songTime: number, creationDate: string = '', updateDate: string = '', songType: string) {
      this.idSong = id;
      this.name = songName;
      this.url = songUrl;
      this.time = songTime;
      this.creation = creationDate;
      this.update = updateDate;
      this.type = songType;
  }

  get id(): number {
      return this.idSong;
  }

  get songName(): string {
    return this.name;
  }

  get songUrl(): string {
      return this.url;
  }
  
  get songTime() : number {
    return this.time;
  }

  get creationDate() : string {
    return this.creation;
  }

  get updateDate() : string {
    return this.update;
  }

  get songType() : string {
    return this.type;
  }
}