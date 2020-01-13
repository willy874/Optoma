import AjaxModel from './ajaxModel'
import StatusModel from './status'
import RouteModel from './route'

class Model{
    constructor(vnode){

    }
    status(){
        return StatusModel
    }
    ajax(){
        return AjaxModel
    }
    route(){
        return RouteModel
    }
}
const Models = new Model
const Status = Models.status()
const Ajax   = Models.ajax()
const Route   = Models.route()

export {
    Status,
    Ajax,
    Route
}
