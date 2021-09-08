import { Router } from "itty-router";
import { response } from "./response";
import { create } from "./creator";

const router = Router();

router.all("*", async (request) => {
    const { query, headers } = request;
    const ip = headers.get("cf-connecting-ip") || headers.get("x-forwarded-for") || request.headers.get("x-real-ip");
    const config = {
        ip,
        font: (query.font || query.f || "baloo").toLowerCase(),
        size: +(query.size || query.s || 20),
        width: +(query.width || query.w || 140),
        height: +(query.height || query.h || 60),
        color: "#" + (query.color || query.c || "2E3440"),
        background: "#" + (query.background || query.b || "ECEFF4"),
    };
    console.log(JSON.stringify(config, null, 2));
    const product = create(config);
    return response({ data: product });
});

async function main() {
    addEventListener("fetch", (event) => {
        event.respondWith(router.handle(event.request));
    });

    addEventListener("scheduled", (event) => {
        event.waitUntil(handle_cron(event));
    });
}

export { main };