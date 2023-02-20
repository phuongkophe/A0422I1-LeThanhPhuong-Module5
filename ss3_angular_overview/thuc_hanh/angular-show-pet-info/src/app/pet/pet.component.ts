  import { Component, OnInit } from '@angular/core';
  import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'forgie',
    image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjczMC0xMjctcC5wbmc.png'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
