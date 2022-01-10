export const goToLogin = (history) => {
    history.push("/login")
};

export const goToSignUp = (history) => {
    history.push("/signUp")
};

export const goToHome = (history) => {
    history.push("/")
};

export const goToRestaurant = (history, restaurantId) => {
    history.push(`/restaurants/${restaurantId}`)
};

export const goToProfile = (history) => {
    history.push("/profile")
};

export const goToCart = (history) => {
    history.push("/cart")
};