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

export const generateRandomHex = (): string => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

export const fetchColor = async (hex: string): Promise<Color | null> => {
    if (hex.length !== 7) return;
    hex = hex.slice(1);

    const config = useRuntimeConfig()

    const {data} = await axios.get<GetColorResponse>(`${config.baseUrl}/color/${hex}`);

    if (data.status === "ok") {
        return data.color as Color;
    }

    return null
}
