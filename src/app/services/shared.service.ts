
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

interface data {
  message: string
}

export class SharedService {

  constructor(){

  }
  private bs = new BehaviorSubject<data>({
    message: 'asdasda'
  });
    

    setData(message){
      this.bs.next(message);
    }

    getData(){
      return this.bs.asObservable();
    }

}