import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{
  
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
      this.onDebounce.emit( valor );
      
    })
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( ) {
    
    this.debouncer.next( this.termino );
    
  }

}
