import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

isOfferCodeAvl: boolean = false;
isSuccessDivVisible : WritableSignal<boolean> = signal(false);

toggleDviVisility(){
  this.isSuccessDivVisible.set(!this.isSuccessDivVisible())
}
studentTotalMarks: number = 0;

onMarksChange() {
  if (this.studentTotalMarks > 100) {
    this.studentTotalMarks = 100;
  }
}

offerList: string[] = [
  "20% off for payTm",
  "10% off for Gpay",
  "15% off for ATM Card",
  "90% off for ATM Card",
  "25% off for ATM Card"
]

productCategoryList: String[]=["Mobile", "Laptop", "Camera", "HeadPhone", "Mouse", "Keyboard", "Monior"];


employeeList=[
  {name:"Hasan", Age:30, City:"Sirajganj", isActive:false},
  {name:"Mahmud", Age:30, City:"Sirajganj", isActive:true},
  {name:"Amir", Age:35, City:"Bangala", isActive:true},
  {name:"Junaid", Age:25, City:"Sirajganj", isActive:false},
  {name:"Jamil", Age:36, City:"Sirajganj", isActive:false},
  {name:"Tanjina", Age:20, City:"Jamtail", isActive:true}
]

}
