import { IsArray, IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO{


    readonly id:number
    
    @IsString()
    @IsNotEmpty()
    readonly title:string;

    @IsArray()
    @IsNotEmpty()
    @IsArray()
    readonly artists:string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate:Date;
    
    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration:Date
}