import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { TweenMax, Power3, Power2, Power1 } from "gsap/all";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

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

  servicios: any[] = [
    'Página Web','Aplicación Móvil','E-commerce', 'Identidad Corporativa', 
    'Consultorias Marketing', 'Posicionamiento SEO & SEM', 'Social Media Management', 'Otro...']

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
    
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(res => {
      console.log(res);
    })
  }

  moved() {
    TweenMax.to(this.box.nativeElement, 2, {
      css: {
        height: "100%"
      },
      ease: Power3
    });

    TweenMax.to(this.contentForm.nativeElement, 1.3, {
      css: {
        opacity: 0
      },
      ease: Power2
    });

    TweenMax.to(this.boxForm.nativeElement, 1.3, {
      delay: 1,
      css: {
        backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)"
      },
      ease: Power2
    });
  }

  formInit() {
    this.form = this.fb.group({
      nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
      correo: new FormControl("", [Validators.required, Validators.email]),
      telefono: new FormControl("", [Validators.required, Validators.minLength(10)]),
      comentarios: new FormControl(""),
      servicio: new FormControl("",[Validators.required]),
      otro: new FormControl(""),
    });
  }

  enviar(e) {
    e.preventDefault();
    this.moved();
  }
}
