function handleSuccess(req, res, code, message, data) {
    return res.status(code).json({
        status: true,
        message,
        data : data
    })
}

function handleError(req,res,code, message){
    return res.status(code).json({
        status: false,
        message,
    })
}

module.exports = {
    handleSuccess, handleError
}