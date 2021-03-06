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
Route.post('/user/forgotPassword', 'UsersController.forgotPassword')

Route.get('/user/photo/email/:email','UsersController.getUserPhotoByEmail')
Route.get('/user/photo/:id','UsersController.getUserPhotoById')

Route.group(() => {
    Route.post('/user/logout','UsersController.logout')
    Route.post('/users/list','UsersController.fetch')
    Route.post('/user/store','UsersController.store')
    Route.post('/user/update','UsersController.update')
    Route.post('/user/destroy','UsersController.destroy')
    Route.post('/user/get','UsersController.getUser')
    Route.post('/user/current','UsersController.getCurrentUser')
    Route.post('/user/banned','UsersController.setBanned')
    Route.post('/user/password','UsersController.changePassword')

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
    Route.post('/province/store','ProvinceController.store')
    Route.post('/province/update','ProvinceController.update')
    Route.post('/province/destroy','ProvinceController.destroy')

    Route.post('/municipalities/list','MunicipalityController.fetch')
    Route.post('/municipalities/forselect','MunicipalityController.getForSelect')
    Route.post('/municipality/store','MunicipalityController.store')
    Route.post('/municipality/update','MunicipalityController.update')
    Route.post('/municipality/destroy','MunicipalityController.destroy')

    Route.post('/speeds/list','SpeedController.fetch')
    Route.post('/speed/store','SpeedController.store')
    Route.post('/speed/update','SpeedController.update')
    Route.post('/speed/destroy','SpeedController.destroy')

    Route.post('/resources/list','ResourceController.fetch')
    Route.post('/resource/store','ResourceController.store')
    Route.post('/resource/update','ResourceController.update')
    Route.post('/resource/destroy','ResourceController.destroy')

    Route.post('/entities/list','EntityController.fetch')
    Route.post('/entities/forselect','EntityController.getForSelect')
    Route.get('/entities/download','EntityController.download')
    Route.post('/entity/get','EntityController.getEntity')
    Route.post('/entity/store','EntityController.store')
    Route.post('/entity/update','EntityController.update')
    Route.post('/entity/destroy','EntityController.destroy')
  }).prefix('api').middleware(['auth'])


Route.any('*', 'MainController.index')

