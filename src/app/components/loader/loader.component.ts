import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { TweenMax, Power3, Power2, Power1, CSSPlugin } from "gsap/all";
const gsapStuff = [CSSPlugin, TweenMax];

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, AfterViewChecked {

  @ViewChild('background', {static: false}) background: ElementRef;
  @ViewChild('box', {static: false}) box: ElementRef;
  @ViewChild('lt1', {static: false}) lt1: ElementRef;
  @ViewChild('lt2', {static: false}) lt2: ElementRef;
  @ViewChild('lt4', {static: false}) lt4: ElementRef;
  @ViewChild('lt3', {static: false}) lt3: ElementRef;
  @ViewChild('lt5', {static: false}) lt5: ElementRef;
  @ViewChild('lt6', {static: false}) lt6: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.move();
  }

  move() {
    TweenMax.to(this.box.nativeElement, 2, {
      delay: 1,
      css: {
        opacity: ".7"
      },
      ease: Power3
    });

    TweenMax.to(this.lt1.nativeElement, 1, {
      delay: 2.3,
      css: {
        marginTop: "0"
      },
      ease: Power1
    });
    TweenMax.to(this.lt3.nativeElement, 1, {
      delay: 2.3,
      css: {
        marginTop: "0"
      },
      ease: Power1
    });
    TweenMax.to(this.lt5.nativeElement, 1, {
      delay: 2.3,
      css: {
        marginTop: "0"
      },
      ease: Power1
    });

    TweenMax.to(this.lt1.nativeElement, 1, {
      delay: 5.7,
      css: {
        opacity: '0'
      },
      ease: Power2
    });
    TweenMax.to(this.lt2.nativeElement, 1, {
      delay: 5.2,
      css: {
        opacity: 0
      },
      ease: Power2
    });
    TweenMax.to(this.lt3.nativeElement, 1, {
      delay: 4.7,
      css: {
        opacity: 0
      },
      ease: Power2
    });
    TweenMax.to(this.lt4.nativeElement, 1, {
      delay: 4.2,
      css: {
        opacity: 0
      },
      ease: Power2
    });
    TweenMax.to(this.lt5.nativeElement, 1, {
      delay: 3.7,
      css: {
        opacity: 0
      },
      ease: Power2
    });
    TweenMax.to(this.lt6.nativeElement, 1, {
      delay: 3.2,
      css: {
        opacity: 0
      },
      ease: Power2
    });

    TweenMax.to(this.background.nativeElement, 1.5, {
      delay: 6.2,
      css: {
        left: '-100%'
      },
      ease: Power2
    });
    TweenMax.to(this.background.nativeElement, 1.7, {
      delay: 8,
      css: {
        opacity: 0
      },
      ease: Power1
    });
    
  }


}
