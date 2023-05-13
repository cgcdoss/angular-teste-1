import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent {

  cep = '';
  cidade = '';

  constructor(
    public httpClient: HttpClient,
  ) { }

  public pesquisarCep() {
    this.httpClient.get<{
      cep: string,
      logradouro: string,
      complemento: string,
      bairro: string,
      localidade: string,
      uf: string,
      ibge: string,
      gia: string,
      ddd: string,
      siafi: string,
    }>('https://viacep.com.br/ws/' + this.cep + '/json/').subscribe((endereco) => {
      this.cidade = endereco.localidade;
    });
  }

}

