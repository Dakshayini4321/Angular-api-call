import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { User, User2, User3 } from './user';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl ='https://doe-dev-api.isorobot.io/api/v1/users'
  private apiUrl2 ='https://doe-dev-api.isorobot.io/api/v1/users'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json',
      'Authorization': 'Bearer eyJpdiI6IkllZytLWERmczVoVVlFVzJIWSs0WlE9PSIsInZhbHVlIjoieGdMU2ZnTFo1MlNWbWJpTGZYZVJoSGltZ2pUTzNURmJKeDlGd09KWUpKSml2ZkZVUlgvNzFHUVd6WUJIQ3hvQ2RiUUV4MGtpRWgvZ3MvYWFyVTBXbFozTnFMbWpHNkxKSUdrck1BWENONXMxMXFyRmp2WXZYN09ValhKZS9YU3h2dzZxbUJna2hBeWZqcjJ4QnF0ME9nPT0iLCJtYWMiOiI4MDE5MGIwZDgzMzMzNDdjOTBiYjM2MGJjOTA2OTNhZmQ2ZTA3NmYyNDg3MmQyYjdlMjJhNzMxY2FmMzAzNzMzIn0='
    })
  }

  constructor(private httpClient: HttpClient) { }


  

  getUser(id: Number){
   return this.httpClient.get('https://doe-dev-api.isorobot.io/api/v1/users/' + id, this.httpOptions);
  }


  getAll():Observable<any>{

    return this.httpClient.get(this.apiUrl, this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )

  }
  getAll2():Observable<any>{

    return this.httpClient.get(this.apiUrl2 +'/32/', this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )

  }


  

  getAll3():Observable<any>{

    return this.httpClient.get(this.apiUrl +'/27', this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )

  }
  getAll4():Observable<any>{

    return this.httpClient.get(this.apiUrl2 +'/1/', this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )

  }

 create(user:User):Observable<any>{
  console.log(user)

    return this.httpClient.post ( 'https://doe-dev-api.isorobot.io/api/v1/users', user , this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
    
      return throwError (error);

    }
    )
    )

  }

  create1(users:User2, id: number):Observable<any>{
    console.log(users)
  
      return this.httpClient.put('https://doe-dev-api.isorobot.io/api/v1/users/' +id, 
     
            
         this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      
        return throwError (error);
  
      }
      )
      )
  
    }

    create2(users:User2):Observable<any>{
      console.log(users)
    
        return this.httpClient.put(this.apiUrl2, 
       
              
          {"id":30,"image":null,"first_name":"user19","last_name":"2","email":"lkjhg@gmail.com","personal_email":"","mobile":"","office_number":"","organization_id":1,"department_id":14,"division_id":9,"section_id":15,"designation_id":2,"pwd":"","pwd_confirm":"","addresses":{"contact":{"address":null,"street":null,"state":null,"city":null,"zip":null,"contact":null,"country_id":null},"emergency":{"relative_name":"","relationship":"","address":"","relative_mobile":""}},"address":"","street":"","state":"","city":"","country_id":"","zip":"","contact":"","relative_name":"","relationship":"","relative_mobile":"","relative_address":"","role_ids":[4],"is_auditor":false,"is_top_user":false,"is_send_welcome":false,"date_of_birth":"","national_insurance_number":"","joining_date":"","leaving_date":"","is_license_active":1} ,this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
        
          return throwError (error);
    
        }
        )
        )
    
      }


  update(id: Number, user:User3):Observable<any>{
    return this.httpClient.put('https://doe-dev-api.isorobot.io/api/v1/users/' + id , user, this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )
  }
  delete(id: number){
    return this.httpClient.delete('https://doe-dev-api.isorobot.io/api/v1/users/'+ id ,  this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )
  }

  getAll10(page: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?page=${page}`,this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }
}

