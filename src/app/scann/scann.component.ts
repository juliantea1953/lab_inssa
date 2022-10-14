import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-scann',
  templateUrl: './scann.component.html',
  styleUrls: ['./scann.component.css']
})
export class ScannComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
