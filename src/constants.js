export const ROUTES = {
    INDEX: '/',
    LOGIN_ROUTE: '/login',
    PROFILE: '/profile'
};

export const AUTH_CODES = {
    INVALID_EMAIL: 'auth/invalid-email',
    USER_NOT_FOUND: 'auth/user-not-found',
    WRONG_PASSWORD: 'auth/wrong-password'
}

export const TEMPERATURE = [
    {value: 10, label: 'Cold'},
    {value: 15, label: 'Autumn cold'},
    {value: 20, label: 'Spring Heat'},
    {value: 25, label: 'Hot summer day'},
    {value: 30, label: 'Equator hot summer day'},
    {value: 35, label: 'Desert'}
]

export const HUMIDITY = [
    {value: 40, label:'Very dry'},
    {value: 60, label: 'Wet'},
    {value: 80, label: 'Rainy'},
    {value: 100, label: 'Amazon jungle'}
]

export const WIND_POWER = [
    {value: 0, label: 'No wind'},
    {value: 5, label: 'Little windy'},
    {value: 10, label: 'Strong wind'}
]