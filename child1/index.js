try {
  const mobx = require('mobx');

  mobx.configure({ isolateGlobalState: true });
  console.log('[child1] mobx: ', true);
} catch (e) {
  console.error('[child1] failed to load mobx', e);
}
try {
  console.log('[child1] mobx-react-lite: ', require('mobx-react-lite') !== undefined);
} catch (e) {
  console.error('[child1] failed to load mobx-react-lite', e);
}
