import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { TweenMax, Power3, Power2, Power1, CSSPlugin } from "gsap/all";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { SendFormService } from 'src/app/services/send-form.service';
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

const gsapStuff = [CSSPlugin, TweenMax];

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit, AfterViewInit {
  @ViewChild("move", { static: false }) box: ElementRef;
  @ViewChild("boxForm", { static: false }) boxForm: ElementRef;
  @ViewChild("content", { static: false }) contentForm: ElementRef;
  form: FormGroup;

  animationBack: any;
  animationBack1: any;
  animationBack2: any;

  afterCheck: boolean = false;

  title: string = "¡Escríbenos!";
  subtitle: string =
    "Nos encantaría escucharte y desarrollar juntos las estrategias correctas para impulsar tu negocio o proyecto.";

  title2: string = "¡Enhorabuena!";
  subtitle2: string = "Construyamos tu proyecto juntos, nos pondremos en contacto contigo a la brevedad";

  servicios: any[] = [
    "Página Web",
    "Aplicación Móvil",
    "E-commerce",
    "Identidad Corporativa",
    "Consultorias Marketing",
    "Posicionamiento SEO & SEM",
    "Social Media Management",
    "Otro"
  ];

  constructor(private fb: FormBuilder, private formService: SendFormService) {}

  ngOnInit() {
    this.formInit();
  }

  ngAfterViewInit() {
    // this.form.controls.servicio.valueChanges.subscribe(res => {
      
    // });
  }

  moved() {
    this.afterCheck = false;
    this.animationBack = TweenMax.to(this.box.nativeElement, 2, {
      css: {
        height: "100%"
      },
      ease: Power3
    });

    this.animationBack1 = TweenMax.to(this.contentForm.nativeElement, 1.3, {
      css: {
        opacity: 0
      },
      ease: Power2
    });

    this.animationBack2 = TweenMax.to(this.boxForm.nativeElement, 1.3, {
      delay: 1,
      css: {
        backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)"
      },
      ease: Power2
    });
  }

  formInit() {
    this.form = this.fb.group({
      nombre: new FormControl("", [ Validators.required, Validators.minLength(3) ]),
      correo: new FormControl("", [Validators.required, Validators.email]),
      telefono: new FormControl("", [ Validators.required, Validators.minLength(10)]),
      comentarios: new FormControl(""),
      servicio: new FormControl("", [Validators.required]),
      otro: new FormControl("")
    });
  }

  enviar() {

    let req = this.form.getRawValue();
    this.formService.enviarForm(req).subscribe();
    this.moved();
    this.afterCheck = true;
    this.form.reset();
  }

  in() {
    this.afterCheck = false;

    try {
      this.animationBack.reverse();
      this.animationBack1.reverse();
      this.animationBack2.reverse();
    } catch(e) { return }
  }
}
