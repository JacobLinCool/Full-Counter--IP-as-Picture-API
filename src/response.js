function response({ data = "", status = 200, headers = {} }) {
    let header = new Headers();
    header.append("Content-Type", "image/svg+xml; charset=utf-8");
    header.append("Access-Control-Allow-Origin", "*");
    header.append("Access-Control-Allow-Headers", "*");
    header.append("Access-Control-Allow-Methods", "*");
    header.append("Access-Control-Allow-Credentials", "true");
    header.append("Cache-Control", "max-age=60, s-maxage=60");
    header.append("Cross-Origin-Resource-Policy", "cross-origin");
    header.append("Content-Disposition", `inline; filename=Full_Counter.svg`);
    for (let h of Object.keys(headers)) header.append(h, headers[h]);

    return new Response(data, {
        status,
        headers: header,
    });
}

export { response };
