import Server from './server';

class Axios extends Server{
  async getStatus() { 
    try {
      let result = await this.axios('get', '/login/status'); 
      return result
    }catch(error) {
      console.log(error)
    }
  }
}

export default new Axios();