import { Component, OnInit } from '@angular/core';
import {Customer} from "../../customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [
    {
      id: 1,
      customerType: {id: 1, name: 'Diamond'},
      name: 'Lê Thanh Phương',
      birthday: '2002-06-23',
      gender: true,
      idCard: '0123456789',
      phoneNumber: '0935290455',
      email: 'phuong@gmail.com',
      address: '408 Hoàng Diệu'
    },
    {
      id: 2,
      customerType: {id: 2, name: 'Gold'},
      name: 'Lê Thanh Phương 2',
      birthday: '2002-06-23',
      gender: true,
      idCard: '0123456789',
      phoneNumber: '0935290455',
      email: 'phuong@gmail.com',
      address: '408 Hoàng Diệu'
    },
    {
      id: 3,
      customerType: {id: 3, name: 'Silva'},
      name: 'Lê Thanh Phương 3',
      birthday: '2002-06-23',
      gender: true,
      idCard: '0123456789',
      phoneNumber: '0935290455',
      email: 'phuong@gmail.com',
      address: '408 Hoàng Diệu'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
