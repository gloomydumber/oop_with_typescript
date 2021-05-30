class NetworkClient {
  tryConnect():void{
    throw new Error('no network!');
  }
}

class UserService {
  constructor(private clinet: NetworkClient) {}

  login(){
    this.clinet.tryConnect();
    //login.....
  }
}

class App{
  constructor(private userService: UserService){}
  run(){
    try{
      this.userService.login();
    }
    catch(error){
      // show dialog to user
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();