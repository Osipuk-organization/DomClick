const UserModel = require("../models/user");
const GroupModel = require('../models/group');
const DepartmentModel = require('../models/department')
const UserTypes = reuire('../models/types/enumUserTypes')
const Errors = require("../models/types/errors");
const AccessLevel = require ('../types/accessLevel')

const getAccessLevel = async (user) =>{
    switch(user.role){
        case UserTypes.ADMIN: return {level: AccessLevel.ADMIN, units: null, employees:null}
        case UserTypes.DIRECTOR: return {level: AccessLevel.DIRECTOR, units: null, employees:null}
        case UserTypes.EMPLOYEE:
            const departments = await DepartmentModel.find()
            departments.forEach( department =>{
                if (department.chief === user._id){
                    const units = [department._id, ...department.groups]
                    const employees = [department.chief]
                    const groups = await GroupModel.find({department: department._id})
                    groups.forEach(group =>{
                        employees.push(...group.employees)
                    })
                    return {level:AccessLevel["DEPARTMENT CHIEF"], units, employees}
                }
            })
            const groups = await GroupModel.find()
            groups.forEach( group =>{
                if (group.chief === user._id){
                    const units = [group._id]
                    const employees = group.employees
                    return {level: AccessLevel["GROUP CHIEF"], units, employees}
                }
            })
            const employee = UserModel.findById(user._id)
            if (employee) return {level: AccessLevel.EMPLOYEE, units: null, employees: [employee._id]}
            else return {level: AccessLevel.VISITOR, units: null, employees: null}
            break
        default: return {level: AccessLevel.VISITOR, units: null, employees: null} 
    }
}

const hasPermission = async (req, res, permission,next) => {
    const access = await getAccessLevel(req.user)
    if (access.level === AccessLevel.ADMIN ||
        access.level === AccessLevel.DIRECTOR ) next(access)
    if (permission.level > access.level) throw Errors.authError.noPermission
    const haveUnit = access.units.find( (unit) => unit === permission.unit)
    const haveEmployee = access.employees.find( (employee) =>  employee === permission.employee)
    if (!!permission.unit && haveUnit) next(access)
    else if (!!permission.employee && haveEmployee) next(access)
    else throw Errors.authError.noPermission
};


module.exports = {
  hasPermission
};
