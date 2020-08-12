const createError = require('http-errors')
const ErrorType = require('./enumErrorTypes')

const userError = {
    duplicateUser: createError(400, 'Такой пользователь уже есть', {
        type: ErrorType.WARNING,
    }),
    notFoundError: createError(400, 'Пользователь не найден', {
        type: ErrorType.WARNING,
    }),
}

const employeeError = {
    duplicateError: createError(400, 'Такой пользователь уже есть', {
        type: ErrorType.WARNING,
    }),
    notFoundError: createError(400, 'Пользователь не найден', {
        type: ErrorType.WARNING,
    }),
}

const departmentError = {
    duplicateError: createError(400, 'Такой департамент уже есть', {
        type: ErrorType.WARNING,
    }),
    notFoundError: createError(400, 'Департамент не найден', {
        type: ErrorType.WARNING,
    }),
}

const groupError = {
    duplicateError: createError(400, 'Такая группа уже есть', {
        type: ErrorType.WARNING,
    }),
    notFoundError: createError(400, 'Группа не найдена', {
        type: ErrorType.WARNING,
    }),
}

const authError = {
    nameNotFoundError: createError(400, 'Пользователь с таким именем не найден', {
        type: ErrorType.WARNING,
    }),
    duplicateUser: createError(400, 'Такой пользователь уже есть', {
        type: ErrorType.WARNING,
    }),
    passwordWrongError: createError(400, 'Введен неправильный пароль', {
        type: ErrorType.WARNING,
    }),
    wrongTokenError: createError(403, 'Неправильный токен', {
        type: ErrorType.ERROR,
    }),
    tokenNotFoundError: createError(403, 'Токен не найден', {
        type: ErrorType.ERROR,
    }),
    noPermission: createError(403, 'Недостаточно прав', {
        type: ErrorType.ERROR,
    }),
}

const validateError = {
    incorrectId: createError(400, 'Некорректный Id в req.params', {
        type: ErrorType.WARNING,
    }),
    incorrectId: createError(500, 'Некорректная модель передана для валидации', {
        type: ErrorType.WARNING,
    }),
}

const multerError = function (err) {
    return createError(500, JSON.stringify(err), { type: ErrorType.ERROR })
}

const flatError = function (data, err) {
    const error = {
        message: 'Ошибка записи в БД',
        description: err,
        data,
    }
    return createError(400, JSON.stringify(error), { type: ErrorType.ERROR })
}

const fileError = {
    noFileSelected: createError(400, 'Не выбраны файлы', {
        type: ErrorType.WARNING,
    }),
}

const commonError = createError(500, 'Ошибка на сервере!', {
    type: ErrorType.ERROR,
})

const success = {
    common: {
        message: 'Выполнено успешно',
        type: ErrorType.SUCCESS,
    },
    flatCreate: {
        message: 'Квартира успешно занесена в базу данных',
        type: ErrorType.SUCCESS,
    },
    flatUpdate: {
        message: 'Данные о квартире успешно обновлены',
        type: ErrorType.SUCCESS,
    },
    flatDelete: {
        message: 'Квартира успешно удалена из базы данных',
        type: ErrorType.SUCCESS,
    },
    departmentCreate: {
        message: 'Департамент успешно создан',
        type: ErrorType.SUCCESS,
    },
    departmentUpdate: {
        message: 'Департамент успешно обновлен',
        type: ErrorType.SUCCESS,
    },
    departmentDelete: {
        message: 'Департамент успешно удален',
        type: ErrorType.SUCCESS,
    },
    groupCreate: {
        message: 'Группа успешно создана',
        type: ErrorType.SUCCESS,
    },
    groupUpdate: {
        message: 'Группа успешно обновлена',
        type: ErrorType.SUCCESS,
    },
    groupDelete: {
        message: 'Группа успешно удалена',
        type: ErrorType.SUCCESS,
    },
    employeeCreate: {
        message: 'Пользователь успешно создан',
        type: ErrorType.SUCCESS,
    },
    employeeUpdate: {
        message: 'Данные пользователя успешно обновлены',
        type: ErrorType.SUCCESS,
    },
    employeeDelete: {
        message: 'Пользователь успешно удален',
        type: ErrorType.SUCCESS,
    },
}

module.exports = {
    userError,
    employeeError,
    authError,
    departmentError,
    groupError,
    validateError,
    multerError,
    flatError,
    fileError,
    commonError,
    success,
}
