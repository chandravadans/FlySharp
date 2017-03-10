import { Component, OnInit } from '@angular/core';
import {Flight} from "../model/flight";
import {Input} from "@angular/core/src/metadata/directives";
import {Payment} from "../model/payment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() selectedFlight: Flight;
  model: Payment = new Payment();

  payForm : FormGroup;

  constructor(formBuilder : FormBuilder) {
    this.payForm = formBuilder.group({
      'name' : ['Enter the name', Validators.compose([Validators.required, Validators.minLength(5)])],
      'address' : ['Your address', Validators.required],
      'email' : ['Your email address', Validators.required],
      'cardNum' : ['Your credit card', Validators.required],
      'cardType' : ['Your card type', Validators.required],
      'expDate' : ['Your card expiry date', Validators.required]
    });
  }

  ngOnInit() {
  }
  get jsonModel() {
    return JSON.stringify(this.model);
  }

  onSubmit(): void {
    alert(this.jsonModel);
  }
}
