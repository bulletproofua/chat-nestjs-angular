import { IsNotEmpty } from "class-validator";

export class GetUserDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    avatar: string;
}
