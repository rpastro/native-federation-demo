import { initFederation } from '@angular-architects/native-federation';

initFederation('assets/federation.manifest.json')
  .catch((err) => console.error('Error initializing federation.', err))
  .then(() => {
    import('./bootstrap').catch(err => console.error(err));
  });
