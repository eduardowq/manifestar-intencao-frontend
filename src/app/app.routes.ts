import { Routes } from '@angular/router';

import { Disciplinas } from './features/disciplinas/disciplinas';
import { Docentes } from './features/docentes/docentes';
import { Nucleos } from './features/nucleos/nucleos';
import { Turmas } from './features/turmas/turmas';
import { Manifestacoes } from './features/manifestacoes/manifestacoes';

export const appRoutes: Routes = [
  { path: 'disciplinas', component: Disciplinas },
  { path: 'docentes', component: Docentes },
  { path: 'nucleos', component: Nucleos },
  { path: 'turmas', component: Turmas },
  { path: 'manifestacoes', component: Manifestacoes },
  { path: '', redirectTo: '/disciplinas', pathMatch: 'full' }
];
