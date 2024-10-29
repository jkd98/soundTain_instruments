import { Injectable } from '@angular/core';

import { clienteAxios } from '../../helpers/axiosClient';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  
  registroUs = async (usuario:Usuario) => {
    try {
      const url = `/auth/login`; // api

      const data = await clienteAxios.post(url,usuario);
      
      //localStorage.setItem('token',data.token);
      console.log(data);
      //if(data.msg === 'ok') this.router.navigate(['/']);
      return null;
    } catch (error) {
      // envira msgs de error
      let err:any = error;
      console.log(err);

      return; 
    }
  }

  autenticarUsusrio = async (email:string,pass:string) => {
    try {
      const url = `/auth/login`; // api

      const data = await clienteAxios.post(url,{email,pass});
      
      //localStorage.setItem('token',data.token);
      console.log(data);
      //if(data.msg === 'ok') this.router.navigate(['/']);
      return null;
    } catch (error) {
      // envira msgs de error
      let err:any = error;
      console.log(err);

      return; 
    }
  }


}
