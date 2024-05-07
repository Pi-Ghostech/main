import { Category, Error } from './Error'
export class Image {
  public id?: number;
  public name?: string;
  public type?: string;
  public picByte?: any ;
    public imageerror?: Error = new Error();
    imageData?: string;
    
}