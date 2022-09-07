import { defineEventHandler } from "h3";
import { colors } from "~/server/data/colors";
import { Color } from "~/types/Color";

export default defineEventHandler(event => {
    const { color } = event.context.params;

    // validate color to be hex without hash
    if (!/^([0-9a-f]{3}){1,2}$/i.test(color)) {
        return {"status": "invalid color",}
    }

    // convert color as hex to rgb
    const rgb = color.match(/[0-9a-f]{2}/gi).map(x => parseInt(x, 16)) as [number, number, number];

    // loop through colors and find the closest match
    let closest = colors[0];
    let closestDistance = Infinity;
    for (const c of colors) {
        const distance = Math.sqrt(
            Math.pow(c.rgb[0] - rgb[0], 2) +
            Math.pow(c.rgb[1] - rgb[1], 2) +
            Math.pow(c.rgb[2] - rgb[2], 2)
        );
        if (distance < closestDistance) {
            closest = c;
            closestDistance = distance;
        }
    }

    return {
        "status": "ok",
        "color": closest,
    }
})

export type GetColorResponse = {
    status: "ok",
    color: Color,
} | {
    status: "invalid color",
}
