import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor (private _route:ActivatedRoute){
    console.log(this._route.snapshot.paramMap.get('link'))
  }

  ngOnInit(): void {
  }



}
