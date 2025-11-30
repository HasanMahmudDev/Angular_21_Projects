import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent {
  //Normal Variable
  // coursName: String= "Angular 21";
  courseName =  signal("Angular 21");
rollNo=signal(112);
student=signal({name:'ABC', city:'Dhaka'});
cityList=signal(["Mirpur","Shewrapara","BijoySaroni"]);

courseDuration: Signal<string> = signal("4 Months");
  constructor(){
    // console.log('before ' +this.coursName)
    // setTimeout(()=>{
    //   this.coursName="React Js";
    //   console.log('After '+this.coursName)
    // }, 3000);

    setTimeout(()=>{
      console.log('before ' +this.courseName())
      this.courseName.set("React Js");
      console.log('After '+this.courseName())
    }, 3000);

  }

  changeCourse(){
    this.courseName.set("Java");
  }
}
