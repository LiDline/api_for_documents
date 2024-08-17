import { z } from 'zod';
import { HttpException, HttpStatus } from '@nestjs/common';

export default function errorResponse(
  data: any,
  Schema: z.ZodType<any, any>,
  text: string,
) {
  try {
    const parsedData = Schema.parse(data);
    return parsedData;
  } catch (error) {
    throw new HttpException(text, HttpStatus.BAD_REQUEST);
  }
}
