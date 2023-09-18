import * as canvas from "canvas";

(async () => {
    canvas.loadImage("https://static.bunnycdn.ru/i/cache/images/3/37/375e7fdc580766874948e5bf678e2a8a.jpg").then((image) => {
        console.log("Loaded!");

        const c = canvas.createCanvas(image.width, image.height);
        const context = c.getContext('2d');
        context.drawImage(image, 0, 0);
    })
});