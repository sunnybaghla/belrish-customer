import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ns-filterItems',
  templateUrl: './filterItems.component.html',
  styleUrls: ['./filterItems.component.css']
})
export class FilterItemsComponent implements OnInit {
  @ViewChild("lbl1", { static: false }) "lbl1": ElementRef;
  selectedIndex: number = 0;
  selectedTic: number;
  flag: boolean = false;
  filterName: {}[] = [];
  tempName: string = "erjf";

  public Ontap(i) {
    this.tempName = i;
    for (var temp = 0; temp < this.filterName.length; temp++) {
      if (this.filterName[temp] === i) {
        this.filterName.splice(temp, 1);
        return;
      }

    }
    this.filterName.push(i);

  }
  public get(i) {
    for (var temp = 0; temp < this.filterName.length; temp++)

      if (this.filterName[temp] === i) {
        return true;
      }

  }
  public onClose() {
    this.filterName = [];
  }
  public onApply() {

  }

  selectMenu(i) {
    this.selectedIndex = i;
  }

  filterArr: { filterName: string, code: string, data: { name: string, code: number }[] }[] = [

    {
      "filterName": "brand",
      "code": "101",
      "data": [{ "name": "PUMA", "code": 1012 }, { "name": "Peter England", "code": 1013 }, { "name": "WOODLAND", "code": 1014 }, { "name": "Spykar", "code": 1015 }, { "name": "RED TAPE", "code": 1016 }, { "name": "NIKE", "code": 1017 }, { "name": "Sktchers", "code": 1018 }, { "name": "Reebok", "code": 1019 }]
    },
    {
      "filterName": "color",
      "code": "102",
      "data": [{ "name": "RED", "code": 1021 }, { "name": "BLACK", "code": 1022 }, { "name": "white", "code": 1023 }, { "name": "PRUPLE", "code": 1024 }, { "name": "NYLON", "code": 1025 }, { "name": "ORANGE", "code": 1026 }]
    },
    {
      "filterName": "soulType",
      "code": "103",
      "data": [{ "name": "LeatherSoul", "code": 1031 }, { "name": "PlasticSoul", "code": 1032 }]
    },
    {
      "filterName": "type",
      "code": "104",
      "data": [{ "name": "casualShoe", "code": 1040 }, { "name": "sportshoe", "code": 1041 }, { "name": "Running Shoe", "code": 1041 }]
    }
  ];
  hint: string = "afgag";

  constructor() {
    this.hint = this.filterArr[0].data[1].name;

  }

  ngOnInit() {
  }

  onItemSelected() {

  }

}
