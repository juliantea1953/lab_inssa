import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  usuario!: Usuario;
  formLogin! : FormGroup;

  constructor(private router:Router, private service:ServiceService /*, private fb: FormGroup*/) { }

  ngOnInit(): void {
  }

  login(){
    // this.usuario = this.formLogin.value;
    // this.service.getLogin(this.usuario).subscribe((resp)=>{
    //   console.log(resp);
    //   if (resp) {
    //     this.router.navigate(["*"]);
        
    //   }else{
    //     console.log("Fallo login")
    //   }
    //   },(error)=>{
    //     console.log("Fallo servidor");

    // })
    

  }

}
