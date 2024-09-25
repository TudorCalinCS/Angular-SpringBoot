import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { CustomValidators } from '../../validators/custom-validators';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  checkoutFromGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];
  constructor(private formBuilder: FormBuilder, private formService: FormService, private router: Router) { }

  ngOnInit(): void {
    this.checkoutFromGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidators.checkBlanksValidation]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidators.checkBlanksValidation]),
        email: new FormControl('',
          [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
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

    // populate credit card data
    const startMonth: number = new Date().getMonth() + 1;

    this.formService.getCreditCardMonths(startMonth).subscribe(
      data => {
        this.creditCardMonths = data;
      }
    )

    this.formService.getCreditCardYears().subscribe(
      data => {
        this.creditCardYears = data;
      }
    )
  }

  get firstName() { return this.checkoutFromGroup.get('customer.firstName'); }
  get lastName() { return this.checkoutFromGroup.get('customer.lastName'); }
  get email() { return this.checkoutFromGroup.get('customer.email'); }

  mirrorShipping($event: Event) {

    const target = $event.target as HTMLInputElement | null;

    if (target?.checked) {
      this.checkoutFromGroup.controls['billingAddress'].setValue(this.checkoutFromGroup.controls['shippingAddress'].value);
    }
    else {
      this.checkoutFromGroup.controls['billingAddress'].reset();
    }
  }
  onSubmit() {

    console.log("Handling the submit button");

    if (this.checkoutFromGroup.invalid) {
      this.checkoutFromGroup.markAllAsTouched();
      return;
    }
    this.router.navigateByUrl('/purchase');

  }

  handleMonthsYears() {

    const creditCardFormGroup = this.checkoutFromGroup.get('creditCard');

    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup?.value.expirationYear);

    let startMonth: number;
    if (currentYear === selectedYear) {
      startMonth = new Date().getMonth() + 1;
    }
    else {
      startMonth = 1;
    }

    this.formService.getCreditCardMonths(startMonth).subscribe(
      data => {
        this.creditCardMonths = data;
      }
    );
  }
}
