import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { CashBook, CashBookSchema } from './cash-book/cash-book.schema';
import { Reconciliation, ReconciliationSchema } from './reconciliation/reconciliation.schema';
import { BankStatement, BankStatementSchema } from './bank-statement/bank-statement.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CashBook.name, schema: CashBookSchema },
      { name: Reconciliation.name, schema: ReconciliationSchema },
      { name: BankStatement.name, schema: BankStatementSchema },
    ]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
