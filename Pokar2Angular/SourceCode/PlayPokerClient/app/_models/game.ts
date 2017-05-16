import { Story } from '../_models/story';

export class Game {
  public  userId: number;
  public  gameId: number;
  public  guid: string;
  public  gameName: string;
  public  deckId: number;
  public  status:string;
  public  description:string;
  public storyCount:number;
  public createdDate: Date;
  public deckType: string
  public  stories:Story[];
}