import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { LoginComponent } from './Pages/login/login.component';
import { CadastroUsuarioComponent } from './Pages/cadastro-usuario/cadastro-usuario.component';
import { AtualizarUsuarioComponent } from './Pages/atualizar-usuario/atualizar-usuario.component';
import { ListaSemanaComponent } from './Pages/lista-semana/lista-semana.component'
import { CriarListaComponent } from './Pages/criar-lista/criar-lista.component';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';
const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastroUsuario', component: CadastroUsuarioComponent },
    { path: 'atualizarUsuario', component: AtualizarUsuarioComponent },
    { path: 'listaSemana', component: ListaSemanaComponent },
    { path: 'criarLista', component: CriarListaComponent },
    { path: 'usuarios', component: UsuariosComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
