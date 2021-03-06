import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
                                               OnChanges,
                                               DoCheck,
                                               AfterContentInit,
                                               AfterContentChecked,
                                               AfterViewChecked,
                                               AfterViewInit,
                                               OnDestroy {
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!', changes)
  }

  ngDoCheck() {
    console.log('ngDoCheck fired!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit fired!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked fired!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked fired!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit fired!');
    console.log('textContent', this.header.nativeElement.textContent);
    console.log('paragraphContent', this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('DESTRUCTION!')
  }

}
