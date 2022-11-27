const authenticate = async (url, body, onSuccess, onFailure) => {
    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const authToken = promise.headers.get('x-auth-token')
        document.cookie = `x-auth-token=${authToken}; max-age=86400;` //24h
        const responce = await promise.json()

        if (responce.username && authToken) {
            onSuccess({
                username: responce.username,
                id: responce._id
            })
        } else {
            onFailure()
        }
    } catch (e) {
        console.log("Submit Error:  ", e)
        onFailure(e)
    }
}

export default authenticate