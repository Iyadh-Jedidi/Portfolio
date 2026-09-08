import { Component, input } from '@angular/core';
@Component({selector:'app-icon',standalone:true,template:`<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path [attr.d]="paths[name()] || paths['arrow']"/></svg>`,styles:[`:host{display:inline-flex;flex-shrink:0;vertical-align:middle}`]})
export class IconComponent {
 name=input('arrow');size=input(20);
 paths:Record<string,string>={
 Shield:'M12 3 3 7v5c0 5 9 10 9 10s9-5 9-10V7l-9-4Zm-4 9 3 3 5-6',
 arrow:'M7 17 17 7M7 7h10v10',down:'M12 5v14m-6-6 6 6 6-6',plus:'M12 5v14M5 12h14',close:'m6 6 12 12M6 18 18 6',menu:'M4 6h16M4 12h16M4 18h16',
 pin:'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
 linkedin:'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2M2 9h4v12H2zM2 2h4v4H2z',
 github:'M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.8a3.3 3.3 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.9a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8S17.5.7 15 2.5a13.4 13.4 0 0 0-7 0C5.5.7 4.3 1.1 4.3 1.1a5 5 0 0 0-.1 3.8A5.4 5.4 0 0 0 2.7 8.7c0 5.4 3.2 6.6 6.2 6.9A3.3 3.3 0 0 0 8 18.2V22',
 Code2:'m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 22',
 Layers3:'m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5',
 Database:'M20 6c0 2-3.6 4-8 4S4 8 4 6s3.6-4 8-4 8 2 8 4ZM4 6v12c0 2 3.6 4 8 4s8-2 8-4V6M4 12c0 2 3.6 4 8 4s8-2 8-4',
 Terminal:'M3 4h18v16H3zM6 8l4 4-4 4m7 0h4',
 ScanLine:'M4 8V4h4m8 0h4v4M4 16v4h4m8 0h4v-4M2 12h20',
 Workflow:'M3 3h6v6H3zM15 15h6v6h-6zM6 9v9h9M9 6h9v9',
 award:'M17 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM8 12l-2 9 6-3 6 3-2-9'
 };
}
