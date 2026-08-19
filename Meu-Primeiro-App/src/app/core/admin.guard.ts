import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthFacade } from './facades/auth.facade';

export const adminGuard: CanActivateFn = () => {
    const authFacade = inject(AuthFacade);
    const router = inject(Router);

    // Primeiro verifica se o usuário está logado.
    // Se não estiver, redireciona para a página de login.
    if (!authFacade.estaLogado()) {
        return router.createUrlTree(['/login']);
    }

    // Depois verifica se o usuário tem perfil de administrador.
    // Se estiver logado, mas não for administrador, envia para a página produtos.
   if (!authFacade.ehAdmin()) {
return router.createUrlTree(['/acesso-negado']);
}

    // Se estiver logado e for administrador, permite o acesso à rota.
    return true;
}