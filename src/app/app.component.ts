import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IconComponent } from './icon.component';
import { projects, skills, jobs } from './portfolio-data';
@Component({selector:'app-root',standalone:true,imports:[IconComponent],templateUrl:'./app.component.html'})
export class AppComponent {
 readonly projects=projects;readonly skills=skills;readonly jobs=jobs;
 readonly lang=signal(0);readonly menu=signal(false);readonly selected=signal<(typeof projects)[number]|null>(null);
 readonly year=new Date().getFullYear();readonly email='iyadh.jedidi10@gmail.com';
 private readonly document=inject(DOCUMENT);
 @ViewChild('projectDialog') projectDialog!:ElementRef<HTMLDialogElement>;
 t(fr:string,en:string){return this.lang()===0?fr:en;}
 toggleLanguage(){this.lang.update(l=>l===0?1:0);this.document.documentElement.lang=this.lang()===0?'fr':'en';this.document.title=this.t('Iyadh Jedidi — Développeur Full Stack','Iyadh Jedidi — Full Stack Developer');}
 openProject(index:number){this.selected.set(this.projects[index]);this.projectDialog.nativeElement.showModal();this.document.body.style.overflow='hidden';}
 closeProject(){this.projectDialog.nativeElement.close();}
 onDialogClose(){this.selected.set(null);this.document.body.style.overflow='';}
 onBackdrop(event:MouseEvent){if(event.target===this.projectDialog.nativeElement){const rect=this.projectDialog.nativeElement.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)this.closeProject();}}
}
