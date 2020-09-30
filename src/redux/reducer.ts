
let initialState = {
    name: {
        id: '',
        fullname: '',
    }
}
const reducer = (state: any = initialState, { type, payload }: any) => {
    switch (type) {
        case "POST_USER":
            const {
                _id,
                fullname,
            } = payload
            return {
                user: {
                    id: _id,
                    fullname,
                }
            }
    }
}
export default reducer;