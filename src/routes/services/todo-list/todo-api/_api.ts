export const todoReqReturn = (request: Request, status, body) => {
    console.debug(`AJAX ${request.method}`)
    if (request.method === 'GET' || request.headers.get('accept') === 'application/json') {
        return {
            status,
            body
        }
    } else {
        return {
            status: 303,
            headers: {
                location: '/services/todo-list/'
            }
        }
            ;
    }

}