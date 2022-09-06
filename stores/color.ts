import { defineStore } from "pinia";
import axios from "axios";

export const useColorStore = defineStore("color", {
    state: () => ({
        name: "Indigo",
        hex: "#5c6ac4",
        rgb: [92, 106, 196],
    }) as Color,
    actions: {
        async fetch(hex: string) {
            if (hex.length !== 7) return;
            hex = hex.slice(1);

            const {status, data} = await axios.get(`https://api.color.pizza/v1/${ hex }`)
            if (status === 200 && data.colors.length > 0) {
                this.name = data.colors[0].name
                this.hex = data.colors[0].hex
                this.rgb = [
                    data.colors[0].rgb.r,
                    data.colors[0].rgb.g,
                    data.colors[0].rgb.b
                ]
            }
        }
    },
})
