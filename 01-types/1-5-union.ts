{
  // Union Types: OR
  type Direction = 'left' | 'right' | 'up' | 'down';
  function moves(direction : Direction){
    console.log(direction);
  }
  moves('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login => success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  }
  type FailState = {
    reason: string;
  }
  type LoginState = SuccessState | FailState;

  function logins(): SuccessState | FailState{
    return {
      response: {
        body: 'logged in!'
      }
    }
  }

  // printLoginState(state)
  // success -> body
  // fail -> reason

  function printLoginStates(state : LoginState){
    if('response' in state){
      console.log(state.response.body);
    }
    else{
      console.log(state.reason);
    }
  }
}