import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty() // 必須を表すバリエーション
  @IsString() // string型を表すバリエーション
  name: string;

  @IsNotEmpty() // 必須を表すバリエーション
  @IsBoolean() // boolean型を表すバリエーション
  isCompleted: boolean;
}
