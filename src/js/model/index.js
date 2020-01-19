import AjaxModel from './ajaxModel'
import StatusModel from './status'
import RouteModel from './route'
import JsonData from './jsonData'

class Model{
    status(){
        return StatusModel
    }
    ajax(){
        return AjaxModel
    }
    route(){
        return RouteModel
    }
    data(){
        return JsonData
    }
}
const Models   = new Model
const Status   = Models.status()
const Ajax     = Models.ajax()
const Route    = Models.route()
const PageData = Models.data()

export {
    Status,
    Ajax,
    Route,
    PageData
}
