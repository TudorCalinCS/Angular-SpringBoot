import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  checkoutFromGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutFromGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: [''],
      }),
    });
  }

  mirrorShipping($event: Event) {

    const target = $event.target as HTMLInputElement | null;

    if(target?.checked){
      this.checkoutFromGroup.controls['billingAddress'].setValue(this.checkoutFromGroup.controls['shippingAddress'].value);
    }
    else{
      this.checkoutFromGroup.controls['billingAddress'].reset();
    }
  }
  onSubmit() {
    console.log("Hanling the submit button");
    console.log(this.checkoutFromGroup.get('customer')?.value);
  }
}
