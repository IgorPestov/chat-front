
let initialState = {
    state: {
        userId: '',
        fullname: '',
    }
}
const reducer = (state: any = initialState, { type, payload }: any) => {
    switch (type) {
        case "POST_USER":
            const {
                userId,
                fullname,
            } = payload
            return {
                user: {
                    userId,
                    fullname,
                }
            }
    }
}
export default reducer;