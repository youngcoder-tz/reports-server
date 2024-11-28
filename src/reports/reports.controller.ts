import { Controller, Post, Body } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CashBookDto } from './cash-book/cash-book.dto';
import { ReconciliationDto } from './reconciliation/reconciliation.dto';
import { BankStatementDto } from './bank-statement/bank-statement.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post('cash-book')
  async createCashBook(@Body() cashBookDto: CashBookDto) {
    return this.reportsService.createCashBook(cashBookDto);
  }

  @Post('reconciliation')
  async createReconciliation(@Body() reconciliationDto: ReconciliationDto) {
    return this.reportsService.createReconciliation(reconciliationDto);
  }

  @Post('bank-statement')
  async createBankStatement(@Body() bankStatementDto: BankStatementDto) {
    return this.reportsService.createBankStatement(bankStatementDto);
  }
}
