import { Module } from '@nestjs/common';
import { PingController } from './ping/ping.controller';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [AccountsModule, TransactionsModule],
  controllers: [PingController],
})
export class AppModule {}
