import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CashBook, CashBookDocument } from './cash-book/cash-book.schema';
import { Reconciliation, ReconciliationDocument } from './reconciliation/reconciliation.schema';
import { BankStatement, BankStatementDocument } from './bank-statement/bank-statement.schema';
import { CashBookDto } from './cash-book/cash-book.dto';
import { ReconciliationDto } from './reconciliation/reconciliation.dto';
import { BankStatementDto } from './bank-statement/bank-statement.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(CashBook.name) private readonly cashBookModel: Model<CashBookDocument>,
    @InjectModel(Reconciliation.name)
    private readonly reconciliationModel: Model<ReconciliationDocument>,
    @InjectModel(BankStatement.name)
    private readonly bankStatementModel: Model<BankStatementDocument>,
  ) {}

  async createCashBook(cashBookDto: CashBookDto): Promise<CashBook> {
    const cashBook = new this.cashBookModel(cashBookDto);
    return cashBook.save();
  }

  async createReconciliation(reconciliationDto: ReconciliationDto): Promise<Reconciliation> {
    const reconciliation = new this.reconciliationModel(reconciliationDto);
    return reconciliation.save();
  }

  async createBankStatement(bankStatementDto: BankStatementDto): Promise<BankStatement> {
    const bankStatement = new this.bankStatementModel(bankStatementDto);
    return bankStatement.save();
  }
}
