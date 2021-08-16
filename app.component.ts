import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      @ViewChild('f') sighForm:NgForm;
      defaultSub = 'advanced';
      user={
        email:' ',
        sub:''
      }
      submitted=false;
      
  onSubmit(form:NgForm){
    this.submitted=true;
    this.user.email = this.sighForm.value.email;
    this.user.sub = this.sighForm.value.pack;
    console.log(form);
  }
}
