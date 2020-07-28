'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/user/validate', 'UsersController.login')


Route.get('/user/photo/email/:email','UsersController.getUserPhotoByEmail')
Route.get('/user/photo/:id','UsersController.getUserPhotoById')

Route.group(() => {
    Route.post('/user/logout','UsersController.logout')
    Route.post('/users/list','UsersController.fetch')

    Route.post('/stats','MainController.getMainDashboard')
    Route.post('/admin/stats','MainController.getAdminDashboard')

    Route.post('/admin/logs/list','ActionController.fetch')
    Route.post('/admin/logs/getData','ActionController.getData')
    Route.post('/admin/logs/getDetails','ActionController.getDetails')

    Route.post('/roles/list','RoleController.fetch')
    Route.post('/roles/grants','RoleController.getGrants')
    Route.post('/roles/rolgrants','RoleController.getRolGrants')
    Route.post('/roles/forselect','RoleController.getRolesForSelect')

    Route.post('/provinces/list','ProvinceController.fetch')

    Route.post('/municipalities/list','MunicipalityController.fetch')
    Route.post('/municipalities/forselect','MunicipalityController.getForSelect')

    Route.post('/speeds/list','SpeedController.fetch')

    Route.post('/resources/list','ResourceController.fetch')
  }).prefix('api').middleware(['auth'])


Route.any('*', 'MainController.index')

