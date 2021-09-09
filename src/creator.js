import fonts from "./fonts";

function create({ ip, font, size, width, height, radius, color, background }) {
    let fontCss = fonts[font],
        fontFamily = font;
    if (!fontCss || !fontFamily) {
        fontCss = fonts["baloo"];
        fontFamily = "baloo";
    }
    let product = "";
    product += `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="${background}">`;
    // add style
    product += `<style>
        ${fontCss}
        svg {
            border-radius: ${radius}px;
        }
        #ip {
            font-family: ${fontFamily};
            font-size: ${size}px;
            fill: ${color};
            text-anchor: middle;
            dominant-baseline: middle;
        }
    </style>`;
    // add background rect
    product += `<rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="${background}"/>`;
    product += `<text id="ip" x="${width / 2}" y="${height / 2}">${ip}</text>`;
    product += "</svg>";
    return product;
}

export { create };
