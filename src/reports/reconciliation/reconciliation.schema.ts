import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Reconciliation {
  @Prop() district: string;
  @Prop() bank_details: string;
  @Prop() deposits: number;
  @Prop() outstanding_cheques: number;
  @Prop() adjusted_balance: number;
}

export type ReconciliationDocument = Reconciliation & Document;
export const ReconciliationSchema = SchemaFactory.createForClass(Reconciliation);
