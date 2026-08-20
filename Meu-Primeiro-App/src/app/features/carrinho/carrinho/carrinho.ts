import { Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';

@Component({
  selector: 'app-carrinho',
  imports: [ RouterLink, MatButtonModule ],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  // A pagina do carrinho passa a consumir o estado global do carrinho.
  carrinhoFacade = inject(CarrinhoFacade);

  removerItem(indice: number) {
    this.carrinhoFacade.removerItem(indice);
  }

  limparCarrinho() {
    this.carrinhoFacade.limparCarrinho();
  }
}


