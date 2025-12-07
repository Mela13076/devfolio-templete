export const themes = {
    
    blue: {
        name: "Blue Modern",
        primary: "#007AFF",
        secondary: "#6B7280",
        dark: "#1F2937",
        light: "#F9FAFB",
        text: "#000000",
        bg: "#fffdf9",
        stroke: "#add2fa",
        strokeDark: "#2d2f40",
    },

    green: {
        name: "Emerald Forest",
        primary: "#10B981",
        secondary: "#34D399",
        dark: "#102610",
        light: "#ECFDF5",
        text: "#FFFFFF",
        bg: "#fffdf9",
        stroke: "#d8fbd6",
        strokeDark: "#2d4031",
    },

    purple: {
        name: "Royal Violet",
        primary: "#8B5CF6",
        secondary: "#A78BFA",
        dark: "#261c2f",
        light: "#F5F3FF",
        text: "#FFFFFF",
        bg: "#fffdf9",
        stroke: "#efd6fb",
        strokeDark: "#3b2d40",
    },

    pink: {
        name: "Rose Blush",
        primary: "#EC4899",
        secondary: "#F472B6",
        dark: "#2a2229",
        light: "#FCE7F3",
        text: "#FFFFFF",
        bg: "#fffdf9",
        stroke: "#faecfa",
        strokeDark: "#402d3b",
    },

    orange: {
        name: "Sunset Ember",
        primary: "#F97316",
        secondary: "#FB923C",
        dark: "#271e0a",
        light: "#FFF7ED",
        text: "#FFFFFF",
        bg: "#fffdf9",
        stroke: "#f8e1bf",
        strokeDark: "#40382d",
    },

    red: {
        name: "Crimson Flame",
        primary: "#EF4444",
        secondary: "#F87171",
        dark: "#241b1b",
        light: "#FEF2F2",
        text: "#FFFFFF",
        bg: "#fffdf9",
        stroke: "#f6c4c4",
        strokeDark: "#3b2d2d",
    },

    yellow: {
        name: "Golden Dawn",
        primary: "#FACC15",
        secondary: "#FDE047",
        dark: "#2C250F",
        light: "#FEF9C3",
        text: "#000000",
        bg: "#fffdf9",
        stroke: "#f7e485",
        strokeDark: "#4a3e20",
    },

    teal: {
        name: "Ocean Breeze",
        primary: "#14B8A6",
        secondary: "#2DD4BF",
        dark: "#0F2A28",
        light: "#CCFBF1",
        text: "#FFFFFF",
        bg: "#fffdf9",
        stroke: "#b6f5ec",
        strokeDark: "#1E3F3A",
    },


} as const;

export type ThemeName = keyof typeof themes;
export type Theme = typeof themes[ThemeName];
