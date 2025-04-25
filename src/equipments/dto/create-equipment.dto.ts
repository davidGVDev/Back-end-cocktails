import { IsString, IsNotEmpty } from "class-validator";

export class CreateEquipmentDto {
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
}
