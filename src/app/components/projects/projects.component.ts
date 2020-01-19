import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import Swiper from "swiper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild("swipercontainer", { static: false }) swiperContainer: ElementRef;
  @ViewChild("pagination", { static: false }) pagination: ElementRef;
  @ViewChild("next", { static: false }) next: ElementRef;
  @ViewChild("prev", { static: false }) prev: ElementRef;

  images: Array<Object> = [
    { img: "../../../assets/cosmiclatte.png" },
    { img: "../../../assets/bengala.png" },
    { img: "../../../assets/gl-consultorias.png" },
    { img: "../../../assets/nueces-xoxoteco.png" },
    { img: "../../../assets/tiim.png" }
  ];

  config: SwiperConfigInterface = {
    direction: "horizontal",
    autoplay: {
      delay: 3000,
    },
    fadeEffect: {
      crossFade: true
    },
    speed: 750,
    slidesPerView: 2,
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: true,
    watchSlidesProgress: false,
    navigation: false,
    keyboard: true,
    pagination: false,
    centeredSlides: false,
    loop: true,
    roundLengths: false,
    slidesOffsetBefore: 100,
    slidesOffsetAfter: 100,
    spaceBetween: 35,
    parallax: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      }
    }
  };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

}
