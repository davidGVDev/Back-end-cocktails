import { IsString, IsNotEmpty, IsArray } from "class-validator";

export class CreateDistillatesSpiritDto {
    @IsString()
    @IsNotEmpty()
    value: string;

    @IsString()
    @IsNotEmpty()
    name_english: string;

    @IsString()
    @IsNotEmpty()
    name_spanish: string;

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

    @IsString()
    @IsNotEmpty()
    history: string;
}
