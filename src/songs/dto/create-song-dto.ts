import { IsArray, IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSongDTO{

    @IsNumber()
    id:number
    
    @IsString()
    @IsNotEmpty()
    readonly title:string;

    @IsArray()
    @IsNotEmpty()
    @IsArray()
    @IsString({each:true})
    readonly artists:string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate:Date;
    
    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration:Date
}