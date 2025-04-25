import { IsNotEmpty, IsString } from "class-validator";

export class CreateMixingMethodDto {
    @IsString()
    @IsNotEmpty()
    value: string;

    @IsString()
    @IsNotEmpty()
    name_spanish: string;

    @IsString()
    @IsNotEmpty()
    name_english: string;

    @IsString()
    @IsNotEmpty()
    description_spanish: string;

    @IsString()
    @IsNotEmpty()
    description_english: string;
}
