import { Component } from '@angular/core';
import { Transaction, TransactionService } from '../transaction.service';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDetailComponent } from '../transaction-detail/transaction-detail.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  transactions: Observable<Transaction[]> = of([]);
  displayedColumns: string[] = ['id', 'date', 'comments', 'action'];
  constructor(private transactionService: TransactionService, public dialog: MatDialog){
    this.transactions = this.transactionService.getTransactions();
    transactionService.transactionsSubject.subscribe(t => {
      this.transactions = of(t);
    })
  }
  viewTransaction(transaction: Transaction){
    this.dialog.open(TransactionDetailComponent,{data: transaction})
  }

}
