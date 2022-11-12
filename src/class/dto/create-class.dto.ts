import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsString, IsNotEmpty } from 'class-validator'

export class CreateClassDto {
  @ApiProperty({
    example: 'Mathematics',
    description: 'Is the name of the class that was given by the administrator',
  })
  @IsNotEmpty()
  @IsString()
  nameClass: string

  @ApiProperty({
    example: 'true',
    description: 'Is the state of the class.',
  })
  @IsNotEmpty()
  @IsBoolean()
  open: boolean
}
