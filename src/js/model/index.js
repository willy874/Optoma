import AjaxModel from './ajaxModel'
import StatusModel from './status'

class Model{
    constructor(vnode){

    }
    status(){
        return StatusModel
    }
    ajax(){
        return AjaxModel
    }
}
const Models = new Model
const Status = Models.status()
const Ajax   = Models.ajax()

export {
    Status,
    Ajax
}
