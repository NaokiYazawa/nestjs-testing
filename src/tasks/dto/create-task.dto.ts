import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty() // 必須を表すバリエーション
  @IsString() // string型を表すバリエーション
  name: string;
}
