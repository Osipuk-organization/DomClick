const UserModel = require('../models/user')
const GroupModel = require('../models/group')
const DepartmentModel = require('../models/department')
const UserTypes = reuire('../models/types/enumUserTypes')
const Errors = require('../models/types/errors')
const AccessLevel = require('../types/accessLevel')

const getAccessLevel = async (user) => {
    let departments
    let groups
    let employees
    switch (user.role) {
        case UserTypes.ADMIN:
            departments = await DepartmentModel.find()
            groups = await GroupModel.find()
            employees = await UserModel.find()
            return {
                level: AccessLevel.ADMIN,
                departments,
                groups,
                employees,
            }
        case UserTypes.DIRECTOR:
            departments = await DepartmentModel.find()
            groups = await GroupModel.find()
            employees = await UserModel.find({
                role: UserTypes.EMPLOYEE,
            })
            return {
                level: AccessLevel.DIRECTOR,
                departments,
                groups,
                employees,
            }
        case UserTypes.EMPLOYEE:
            const allDepartments = await DepartmentModel.find()
            for (let i = 0; i < allDepartments.length; i++) {
                if (department.chief === user._id) {
                    departments = [department._id]
                    groups = [...department.groups]
                    employees = [department.chief]
                    const departmentGroups = await GroupModel.find({
                        department: department._id,
                    })
                    departmentGroups.forEach((group) => {
                        employees.push(...group.employees)
                    })
                    return {
                        level: AccessLevel['DEPARTMENT CHIEF'],
                        departments,
                        groups,
                        employees,
                    }
                }
            }
            const allGroups = await GroupModel.find()
            allGroups.forEach((group) => {
                if (group.chief === user._id) {
                    return {
                        level: AccessLevel['GROUP CHIEF'],
                        departments: null,
                        groups: [group._id],
                        employees: [...group.employees],
                    }
                }
            })
            const employee = await UserModel.findById(user._id)
            if (employee)
                return {
                    level: AccessLevel.EMPLOYEE,
                    departments: null,
                    groups: null,
                    employees: [employee._id],
                }
        // break-и специально не поставил, чтобы упасть в следующий кейс
        case UserTypes.VISITOR:
        default:
            return {
                level: AccessLevel.VISITOR,
                departments: null,
                groups: null,
                employees: null,
            }
    }
}

module.exports = {
    determine: function (permission) {
        return async function (req, res, next) {
            const access = await getAccessLevel(req.user)
            if (
                permission.level > access.level ||
                (permission.department && !access.departments.find((department) => department === permission.department)) ||
                (permission.group && !access.groups.find((group) => group === permission.group)) ||
                (permission.employee && !access.employees.find((employee) => employee === permission.employee))
            ) {
                throw Errors.authError.noPermission
            }
            res.locals.access = access
            next()
        }
    },
}
