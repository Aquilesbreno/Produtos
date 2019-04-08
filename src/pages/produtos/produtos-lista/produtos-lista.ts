import { Observable } from 'rxjs/Observable';
import { ProdutosProvider } from './../../../providers/produtos/produtos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-produtos-lista',
  templateUrl: 'produtos-lista.html',
})
export class ProdutosListaPage {
  produtos: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastController,
              private produtosProvider: ProdutosProvider) {

                this.produtos = this.produtosProvider.getAll();//aqui ta guardando todos os produtos
  }

  newItemProdutos(){ // push é método que chama/abre uma página
                     // o nome da page vc vê na classe da Page
    this.navCtrl.push('ProdutosEditaPage');
  }

  editItemProdutos(produto:any){
    this.navCtrl.push('ProdutosEditaPage', {produtokey: produto.key});

  }


  removeItemProdutos(produtokey:string, hasImg: boolean){
    this.produtosProvider.remove(produtokey, hasImg);
    this.toast.create({
     message:"Produto removida com sucesso",
     duration: 3000,
     position: 'botton'}).present();


  }





}
