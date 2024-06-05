import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  transactions: Transaction[] = [
    { id: 1, date: '01/10/2020', comments: 'Utility bill' },
    { id: 2, date: '15/10/2020', comments: '' },
  ];
  constructor() {}
  public transactionsSubject = new Subject<Transaction[]>();

  getTransactions() {
    return of(this.transactions);
  }
  updateTransaction(transaction: Transaction) {
   let transactionId = this.transactions.findIndex(t => t.id === transaction.id)
   this.transactions[transactionId] =  transaction;
   this.transactionsSubject.next(this.transactions);

  }
}
export class Transaction {
  id!: number;
  date!: string;
  comments!: string;
}
