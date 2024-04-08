import { initFederation } from '@angular-architects/native-federation';

initFederation()
	.catch((err) => console.error('Error initializing federation.', err))
	.then(() => {
    import('./bootstrap').catch(err => console.error(err));
  });
