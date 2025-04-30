import { IsString, IsNotEmpty } from "class-validator";

export class CreateCommonDto {
    @IsString()
    @IsNotEmpty()
    table: string;
}
