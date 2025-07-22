import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count : WritableSignal <number> = signal<number>(0);
  data = computed(()=>200);

  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y()); // when x or y changes z will recalculate again. 

  handleCounter(val:string){
    if(val=="plus"){
      this.count.set(this.count() +1 );
    } else if(val=="minus"){
      if(this.count() > 0){
        this.count.set(this.count() -1 );
      }
    } else{
      this.count.set(0);
    }
  }

  updateZ(){
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
  }
}
