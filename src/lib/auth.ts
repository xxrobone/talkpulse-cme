const signIn = (jwt: string) => {
    localStorage.setItem('pulse-jwt', jwt);
}

const isSignedIn = () => !!localStorage.getItem('pulse-jwt');

const getJWT = () => localStorage.getItem('pulse-jwt');

const signOut = () => localStorage.removeItem('pulse-jwt');

export default {
    signIn,
    signOut,
    isSignedIn,
    getJWT
}