const {find, insert} = require('./userController');

const setuserControllerRoutes = ($router) =>{
    $router.get('/',find)
    $router.post('/',insert)
}

module.exports = setuserControllerRoutes