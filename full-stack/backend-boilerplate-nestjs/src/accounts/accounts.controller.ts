import { Controller, Get, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountBalanceDto } from './dto/account-balance.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Get('/:accountId')
  getAccountBalance(@Param('accountId') accountId: string): AccountBalanceDto {
    const balance = this.accountsService.getAccountBalance(accountId);
    return {
      account_id: accountId,
      balance: balance,
    };
  }
}
