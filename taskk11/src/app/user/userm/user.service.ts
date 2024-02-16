import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { User } from './user';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl ='https://doe-dev-api.isorobot.io/api/v1/users'
  private apiUrl2 ='https://doe-dev-api.isorobot.io/api/v1/users'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application',
      'Authorization': 'Bearer eyJpdiI6IkllZytLWERmczVoVVlFVzJIWSs0WlE9PSIsInZhbHVlIjoieGdMU2ZnTFo1MlNWbWJpTGZYZVJoSGltZ2pUTzNURmJKeDlGd09KWUpKSml2ZkZVUlgvNzFHUVd6WUJIQ3hvQ2RiUUV4MGtpRWgvZ3MvYWFyVTBXbFozTnFMbWpHNkxKSUdrck1BWENONXMxMXFyRmp2WXZYN09ValhKZS9YU3h2dzZxbUJna2hBeWZqcjJ4QnF0ME9nPT0iLCJtYWMiOiI4MDE5MGIwZDgzMzMzNDdjOTBiYjM2MGJjOTA2OTNhZmQ2ZTA3NmYyNDg3MmQyYjdlMjJhNzMxY2FmMzAzNzMzIn0='
    })
  }

  constructor(private httpClient: HttpClient) { }


  getAll():Observable<any>{

    return this.httpClient.get(this.apiUrl, this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )

  }
  getAll2():Observable<any>{

    return this.httpClient.get(this.apiUrl2 +'/2/', this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )

  }

  getAll3():Observable<any>{

    return this.httpClient.get(this.apiUrl2 +'/25/', this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
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

    return this.httpClient.post (this.apiUrl, {"image":null,"first_name":"V","last_name":"ff","email":"dad@gmail.com","personal_email":"","mobile":"3434534534535","office_number":"3243445345345","organization_id":1,"department_id":18,"division_id":10,"section_id":13,"designation_id":5,"pwd":"ByNGqjiXQDrkGA5mJBWYgg==","pwd_confirm":"ByNGqjiXQDrkGA5mJBWYgg==","addresses":{"contact":{"address":"","street":"","state":"","city":"","zip":"","contact":"","country_id":null},"emergency":{"relative_name":"","relationship":"","address":"","relative_mobile":""}},"address":"","street":"","state":"","city":"","country_id":"","zip":"","contact":"","relative_name":"","relationship":"","relative_mobile":"","relative_address":"","role_ids":[3],"is_auditor":false,"is_top_user":false,"is_send_welcome":false,"date_of_birth":"","national_insurance_number":"","joining_date":"","leaving_date":"","is_license_active":1}, this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
    
      return throwError (error);

    }
    )
    )

  }
  update(section_id: string, user:User):Observable<any>{
    return this.httpClient.put(this.apiUrl+'/users'+ section_id, this.httpOptions).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )
  }
  delete(section_id: string){
    return this.httpClient.delete(this.apiUrl2+'/25'+section_id).pipe(catchError((error:HttpErrorResponse)=> {
      return throwError (error);
    }
    )
    )
  }
}
