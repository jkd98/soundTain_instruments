import { Injectable } from '@angular/core';

import { clienteAxios } from '../../helpers/axiosClient';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/interfaces/usuario';
import { Respuesta } from '../intefaces/respuesta';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  registroUs = async (usuario: Usuario) => {
    try {
      const url = `/auth/registro`; // api

      const data = await clienteAxios.post(url, usuario);

      //localStorage.setItem('token',data.token);
      console.log(data);
      //if(data.msg === 'ok') this.router.navigate(['/']);
      return null;
    } catch (error) {
      // envira msgs de error
      let err: any = error;
      console.log(err);

      return;
    }
  }

  confirmar = async (tkn: Usuario['token']) => {
    //console.log(tkn);
    //return;
    try {
      const url = `/auth/confirmar/${tkn}`; // api

      const data = await clienteAxios.get(url);

      //localStorage.setItem('token',data.token);
      console.log(data);
      //if(data.msg === 'ok') this.router.navigate(['/']);
      return null;
    } catch (error) {
      // envira msgs de error
      let err: any = error;
      console.log(err);

      return;
    }
  }

  autenticarUsusrio = async (email: string, pass: string) => {
    try {
      const url = `/auth/login`; // api
      const resp = await clienteAxios.post(url, { email, pass });
      const data:Respuesta = resp.data;
      //localStorage.setItem('token',data.token);
      console.log(data);
      //if(data.msg === 'ok') this.router.navigate(['/']);
      return data;
    } catch (error) {
      // envira msgs de error
      let err: any = error;
      console.log(err);
      let respErr:Respuesta = {status:'error',msg:'error al hacer la petición', data:null};
      return respErr;
    }
  }


}
