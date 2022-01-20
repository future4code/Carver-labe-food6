export const goToLogin = (history) => {
    history.push("/")
};

export const goToSignUp = (history) => {
    history.push("/signUp")
};

export const goToHome = (history) => {
    history.push("/home")
};

export const goToRestaurant = (history) => {
    history.push(`/restaurants`)
};

export const goToProfile = (history) => {
    history.push("/profile")
};

export const goToProfileEdit = (history) => {
    history.push("/profile/edit")
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