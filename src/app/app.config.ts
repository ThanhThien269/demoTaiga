import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideState, provideStore } from '@ngrx/store';
import { itemReducer } from './ngrx/reducers/product.reducer';
import { cartReducer } from './ngrx/reducers/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { speciesReducer } from './ngrx/reducers/species.reducer';
import { provideHttpClient } from '@angular/common/http';
import { SpeciesEffects } from './ngrx/effects/species.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'cuahang-682a8',
          appId: '1:850849922509:web:3c5dd3fefd57e0d3465884',
          storageBucket: 'cuahang-682a8.appspot.com',
          apiKey: 'AIzaSyDBjHLJGw7TgOP0qf1Wy7umvBRQBi9G6CE',
          authDomain: 'cuahang-682a8.firebaseapp.com',
          messagingSenderId: '850849922509',
          measurementId: 'G-97V2HTMDWP',
        })
      ),
      TuiRootModule
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    provideStore(),
    provideState({ name: 'cart', reducer: cartReducer }),
    provideState({ name: 'species', reducer: speciesReducer }),

    provideEffects([SpeciesEffects]),
    provideHttpClient(),
  ],
};
