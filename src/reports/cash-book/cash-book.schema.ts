import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CashBook {
  @Prop() date: string;
  @Prop() cheque_no: string;
  @Prop() payment_method: string;
  @Prop() description: string;
  @Prop() income: number;
  @Prop() expenditure: number;
  @Prop() new_balance: number;
}

export type CashBookDocument = CashBook & Document;
export const CashBookSchema = SchemaFactory.createForClass(CashBook);
