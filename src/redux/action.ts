const postUser = (payloadUser: any) => {
    return {
        type: "POST_USER",
        payload: payloadUser,
    }
}

export default {
    postUser,
}