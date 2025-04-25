import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateGlasswareDto {
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
    description_english: string;

    @IsString()
    @IsNotEmpty()
    description_spanish: string;

    @IsArray()
    @IsNotEmpty()
    @IsString({ each: true })
    examples_cocktails: string[];
}
