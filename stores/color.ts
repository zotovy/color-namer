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
            if (hex.length !== 7) return;
            hex = hex.slice(1);

            const { data } = await axios.get<GetColorResponse>("color/" + hex);

            if (data.status === "ok") {
                this.name = data.color.name;
                this.hex = data.color.hex;
                this.rgb = data.color.rgb;
            }
        },
        async fetchRandom() {
            // generate random hex color
            const hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
            await this.fetch(hex);
        }
    },
})
