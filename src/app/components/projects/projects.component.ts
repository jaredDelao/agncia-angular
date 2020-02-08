import { Component, OnInit, AfterViewInit } from "@angular/core";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '700px',
        thumbnailsColumns: 4,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        previewAutoPlay: true,
        previewAutoPlayPauseOnHover: true,
        previewCloseOnClick: true, 
        previewCloseOnEsc: true,
        arrowPrevIcon: "fa fa-chevron-left", 
        arrowNextIcon: "fa fa-chevron-right",
        closeIcon: "fa fa-window-close",
        fullscreenIcon: "fa fa-arrows", 
        spinnerIcon: "fa fa-refresh fa-spin fa-3x fa-fw",
        previewFullscreen: true,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 500
      {
        breakpoint: 500,
        width: '100%',
        height: '300px',
        preview: false
      },
      {
        breakpoint: 400,
        width: '100%',
        height: '200px',
        preview: false
      }
    ];

    this.galleryImages = [
      { 
        small: "../../../assets/cosmiclatte.png",
        medium: "../../../assets/cosmiclatte.png", 
        big: "../../../assets/cosmiclatte.png", 
      },
      { 
        small: "../../../assets/bengala.png",
        medium: "../../../assets/bengala.png",
        big: "../../../assets/bengala.png" 
      },
      { 
        small: "../../../assets/gl-consultorias.png",
        medium: "../../../assets/gl-consultorias.png", 
        big: "../../../assets/gl-consultorias.png" 
      },
      { 
        small: "../../../assets/nueces-xoxoteco.png",
        medium: "../../../assets/nueces-xoxoteco.png",
        big: "../../../assets/nueces-xoxoteco.png" 
      },
      { 
        small: "../../../assets/tiim.png",
        medium: "../../../assets/tiim.png",
        big: "../../../assets/tiim.png" 
      }
    ]
  }

  ngAfterViewInit() {}

}
