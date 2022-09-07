import { useRuntimeConfig } from "#app";
import axios from "axios";
import { defineStore } from "pinia";
import { Color } from "~/types/Color";
import { GetColorResponse } from "~/server/routes/color/[color]";

export const useColorStore = defineStore("color", {
    state: () => ({
        name: "Indigo",
        hex: "#5c6ac4",
        rgb: [92, 106, 196],
    }) as Color,
    actions: {
        async fetch(hex: string) {
            const color = await fetchColor(hex);

            if (color) {
                this.name = color.name;
                this.hex = color.hex;
                this.rgb = color.rgb;
            }
        },
        async fetchRandom() {
            const hex = generateRandomHex()
            await this.fetch(hex);
        }
    },
})

const generateRandomHex = (): string => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

const fetchColor = async (hex: string): Promise<Color | null> => {
    if (hex.length !== 7) return;
    hex = hex.slice(1);

    const config = useRuntimeConfig()

    const {data} = await axios.get<GetColorResponse>(`${config.baseUrl}/color/${hex}`);

    if (data.status === "ok") {
        return data.color as Color;
    }

    return null
}

// function that takes color as argument and replace favicon with circle of that color
export const changeFavicon = (color: Color) => {
    const favicon = document.createElement("link") as HTMLLinkElement;
    favicon.rel = "icon"
    document.getElementsByTagName('head')[0].appendChild(favicon);
    const canvas = document.createElement("canvas");
    // draw circle on canvas
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color.hex;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, 2 * Math.PI);
    ctx.fill();
    favicon.href = canvas.toDataURL("image/png");
}
