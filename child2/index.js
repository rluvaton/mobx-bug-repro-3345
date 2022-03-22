try {
  console.log('[child2] mobx: ', require('mobx') !== undefined);
} catch(e) {
  console.error('[child2] failed to load mobx', e);
}
try {
  console.log('[child2] mobx-react: ', require('mobx-react') !== undefined);
} catch (e) {
  console.error('[child2] failed to load mobx-react', e);
}

