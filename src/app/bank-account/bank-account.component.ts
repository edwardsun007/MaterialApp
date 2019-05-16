import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bank-account",
  templateUrl: "./bank-account.component.html",
  styleUrls: ["./bank-account.component.css"]
})
export class BankAccountComponent implements OnInit {
  // This property is bound using its original name
  @Input() bankName: string;

  // this property value is bound to a different property name
  // when this component is instantiated in a template.
  @Input("account-id") bank_account_id: string;

  // this property is not bound, and is not automatically updated by Angular
  normalizedBankName: string;

  constructor() {}

  ngOnInit() {
    console.log("what is bank_account_id=" + this.bank_account_id);
  }
}
