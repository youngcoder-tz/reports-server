import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BankStatement {
  @Prop() file_url: string;
}

export type BankStatementDocument = BankStatement & Document;
export const BankStatementSchema = SchemaFactory.createForClass(BankStatement);
