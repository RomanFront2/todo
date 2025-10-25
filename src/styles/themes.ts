import { Theme, Themes } from "../models/theme";

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#635cb3ff',
        backgroundSecondary: '#8884b0ff',
        backgroundForm: '#a3a0c2ff',
        button: '#8884b0ff'
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: '#000',
        backgroundSecondary: '#777',
        backgroundForm: '#999',
        button: '#777'
    }
}

export const themes: Themes = { light, dark }