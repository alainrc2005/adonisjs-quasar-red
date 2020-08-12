const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const View = use('View')
  const Config = use('Config')
  View.global('year', () => new Date().getFullYear())
  View.global('config', function (key) { return Config.get(key) })
})