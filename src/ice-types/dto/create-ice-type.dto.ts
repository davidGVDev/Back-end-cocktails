import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateIceTypeDto {
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

    @IsArray()
    @IsNotEmpty()
    @IsString({ each: true })
    examples_cocktails: string[];
}
