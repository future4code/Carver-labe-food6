export const goToLogin = (history) => {
    history.push("/login")
};

export const goToSignUp = (history) => {
    history.push("/signUp")
};

export const goToHome = (history) => {
    history.push("/")
};

export const goToRestaurant = (history) => {
    history.push(`/restaurants`)
};

export const goToProfile = (history) => {
    history.push("/profile")
};

export const goToCart = (history) => {
    history.push("/cart")
};

export const goToAddress = (history) => {
    history.push("/address")
};
export const goToProducts = (history, id) => {
    history.push(`/restaurants/${id}`)
};