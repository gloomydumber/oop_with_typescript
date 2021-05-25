type LoadingState = {
  state: 'loading';
};

type SuccessState = {
  state: 'success';
  response: {
    body: string;
  };
};

type FailState = {
  state: 'fail';
  reason: string;
};

type ResourceLoadState = LoadingState | SuccessState | FailState;

/* My owns */

// function printLoginState(state:ResourceLoadState):string{
//   switch(state.state){
//     case 'loading':
//       return 'loading...';
//     case 'success':
//       return 'loaded';
//     case 'fail':
//       return 'no network';
//     default:
//       throw new Error('unknown error');
//   }
// }

/* answers */

function printLoginState(state: ResourceLoadState){
  switch(state.state){
    case 'loading':
      console.log('loading...');
      break;
    case 'success':
      console.log(`${state.response.body}`);
      break;
    case 'fail':
      console.log(`${state.reason}`);
      break;
    default:
      throw new Error(`unknown state: ${state}`);
  }
}

printLoginState({ state: 'loading' }); // loading...
printLoginState({ state: 'success', response: { body: 'loaded' } }); // loaded
printLoginState({ state: 'fail', reason: 'no network' }); // no network