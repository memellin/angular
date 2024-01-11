import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-cardcls',
  templateUrl: './big-cardcls.component.html',
  styleUrls: ['./big-cardcls.component.css']
})
export class BigCardclsComponent implements OnInit {

  @Input()
  cardPhoto:string =""
  @Input()
  cardTitle:string =""
  @Input()
  cardDescription:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
