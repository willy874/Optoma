import StatusModel from './status'
import RouteModel from './route'
import JsonData from './jsonData'

class Model{
    constructor(){
 
    }
    status(){
        return StatusModel
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
const Route    = Models.route()
const PageData = Models.data()

export {
    Status,
    Route,
    PageData
}
