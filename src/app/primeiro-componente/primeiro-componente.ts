import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 

@Component({
  selector: "app-primeiro-componente",
  template: `
      <div class="app-background">
      <div class="container">
      <h2>Você quer se juntar ao time da Convem?</h2>
      <input type="text" [(ngModel)]="resposta" placeholder="Digite aqui!">
      <button (click)="confirmar()">Confirmar</button>
      <p>{{ mensagem }}</p>
    </div>
    </div>
  `,
    styleUrls: ["./primeiro-componente.css"]

})
export class PrimeiroComponenteComponent {
  resposta: string = "";
  mensagem: string = "";

  constructor(private http: HttpClient) {} 

  confirmar() {
    if (this.resposta.toLowerCase() === 'sim') {
      const apiUrl = "https://convem-back.onrender.com/verificar-resposta"; 
  
      const requestBody = {
        resposta: this.resposta
      };
  
      this.http.post(apiUrl, requestBody).subscribe(
        (response: any) => {
          if (response.status === "success") {
          } else {
            alert("Você está mais próximo de se juntar ao time!");
            console.log("resposta quando for sim")
          }
        },
      );
    } else {
      alert("Erro! Tente novamente.");
    }
  
    this.resposta = "";
  }
}  