import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

  import { from } from 'rxjs';

export interface demoList {
  _id: String,
  name: String,
  type: String,
  list: String
};

@Component({
  selector: 'app-demo-ui',
  templateUrl: './demo-ui.component.html',
  styleUrls: ['./demo-ui.component.css']
})
export class DemoUiComponent implements OnInit {

  tableColumns: String[] = ['name', 'type', 'list', 'action'];
  demoList: Array <demoList>;
  typeList: [
    {
      name: "Movies",
      Value: "Movie"
    },
    {
      name: "Food",
      Value: "Food"
    }
  ];
  editData = {};


  createFrom: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    list: new FormControl('',  Validators.required)
  })
  constructor(private demoService: DemoService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getDemoList()
  }

  //get demo  list
  getDemoList() {
    this.demoService.getDemoList().subscribe(res => {
      this.demoList = res['demoList']      
    }, err => {
      console.log('err', err);
    })
  }

  //edit demo data
  editClick(data) {
    this.editData = data;    
    this.createFrom.setValue({
      name: this.editData['name'],
      type: this.editData['type'],
      list: this.editData['list'].join(',')
    });
  }

  //reset form
  clearForm() {
    this.editData = {};
    this.createFrom.reset();
  }

  onSubmit(data) {
    //if there is id then update
    if (this.editData && this.editData['_id']) {
      data['_id'] = this.editData['_id'];
      data.list = data.list.split(',').flat()      
      this.demoService.updateDemo(data).subscribe(res => {
        this.getDemoList();
        this.clearForm();
      }, err => {
        console.log('err', err);
      })
    } else {
      //if it is new data then create
      data.list = data.list.split(',').flat()
      this.demoService.createDemo(data).subscribe(res => {
        this.getDemoList();
        this.clearForm();
      },  err => {})
    }
  }

  //delete demo
  deleteDemo(id) {
    this.demoService.deleteDemo(id).subscribe(res => {
      this.getDemoList()
    }, err => {
      console.log('err', err);
    })
  }

}
