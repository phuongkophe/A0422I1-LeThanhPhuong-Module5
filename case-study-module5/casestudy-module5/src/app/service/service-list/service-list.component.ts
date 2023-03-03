import { Component, OnInit } from '@angular/core';
import {Facility} from "../../facility";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  facilities : Facility[] = [
    {
      id: 1,
      name: 'Villa 101',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas_Pool-1047x563.jpg',
      area: 100,
      cost: 100,
      peopleMax: 5,
      rentType: {id: 1, name: 'Month', cost: 200},
      serviceType: {id: 1, name: 'Villa'},
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Bếp nướng',
      poolArea: 20,
      floor: 2
    },
    {
      id: 2,
      name: 'Room 202',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-1047x563.jpg',
      area: 100,
      cost: 100,
      peopleMax: 5,
      rentType: {id: 1, name: 'Month', cost: 200},
      serviceType: {id: 1, name: 'Room'},
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Bếp nướng',
      poolArea: 20,
      floor: 2
    },
    {
      id: 3,
      name: 'Villa 102',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-1047x563.jpg',
      area: 100,
      cost: 100,
      peopleMax: 5,
      rentType: {id: 1, name: 'Month', cost: 200},
      serviceType: {id: 1, name: 'House'},
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Bếp nướng',
      poolArea: 20,
      floor: 2
    },
    {
      id: 4,
      name: 'Villa bể bơi',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas_Pool-1047x563.jpg',
      area: 100,
      cost: 100,
      peopleMax: 5,
      rentType: {id: 1, name: 'Month', cost: 200},
      serviceType: {id: 1, name: 'Villa'},
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Bếp nướng',
      poolArea: 20,
      floor: 2
    },
    {
      id: 5,
      name: 'Villa hướng biển',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-1047x563.jpg',
      area: 100,
      cost: 100,
      peopleMax: 5,
      rentType: {id: 1, name: 'Month', cost: 200},
      serviceType: {id: 1, name: 'Villa'},
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Bếp nướng',
      poolArea: 20,
      floor: 2
    },
    {
      id: 6,
      name: 'Villa bể bơi 2',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-1047x563.jpg',
      area: 100,
      cost: 100,
      peopleMax: 5,
      rentType: {id: 1, name: 'Month', cost: 200},
      serviceType: {id: 1, name: 'Villa'},
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Bếp nướng',
      poolArea: 20,
      floor: 2
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
