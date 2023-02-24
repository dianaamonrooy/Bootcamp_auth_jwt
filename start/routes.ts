/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import UsuariosController from 'App/Controllers/Http/UsuariosController'
import Usuario from 'App/Models/Usuario'

Route.get('/', async () => {
  return { hello: 'world' }
}).middleware("auth")

Route.group(() => {
  Route.post("/registrar", "UsuariosController.registrarUsuario")
  Route.post("/login", "UsuariosController.login")
}).prefix("/api")
