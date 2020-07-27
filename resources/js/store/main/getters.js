export const AuthorizationCode = (state) => {
    return 'Bearer '+state.token;
};
