# Full Counter: IP as Picture API
**IPAPAPI** 😃

1.  [**Endpoint**](#endpoint)
2.  [**Parameters**](#parameters)
3.  [**Privacy Policy**](#privacy-policy)
4.  [**Deploy By Yourself**](#deploy-by-yourself)
5.  [**That's Not My IP!**](#thats-not-my-ip)
6.  [**License**](#license)

## Endpoint
```md
https://fc.jacob.workers.dev/
```

Example:

[![EXAMPLE](https://fc.jacob.workers.dev/)](https://fc.jacob.workers.dev/)

## Parameters

### `color` || `c`
- default: `"2E3440"`
- example: `"ECEFF4"`, `"royalblue"`, `"transparent"`

```md
https://fc.jacob.workers.dev/?color=D08770
```

[![EXAMPLE](https://fc.jacob.workers.dev/?color=D08770)](https://fc.jacob.workers.dev/?color=D08770)

### `background` || `b`
- default: `"ECEFF4"`
- example: `"2E3440"`, `"royalblue"`, `"transparent"`

```md
https://fc.jacob.workers.dev/?background=88C0D0
```

[![EXAMPLE](https://fc.jacob.workers.dev/?background=88C0D0)](https://fc.jacob.workers.dev/?background=88C0D0)

### `width` || `w`
- default: `140`

```md
https://fc.jacob.workers.dev/?width=300
```

[![EXAMPLE](https://fc.jacob.workers.dev/?width=300)](https://fc.jacob.workers.dev/?width=300)

### `height` || `h`
- default: `60`

```md
https://fc.jacob.workers.dev/?height=200
```

[![EXAMPLE](https://fc.jacob.workers.dev/?height=200)](https://fc.jacob.workers.dev/?height=200)

### `radius` || `r`
- default: `0`

```md
https://fc.jacob.workers.dev/?radius=15
```

[![EXAMPLE](https://fc.jacob.workers.dev/?radius=15)](https://fc.jacob.workers.dev/?radius=15)

### `size` || `s`
- default: `20`

```md
https://fc.jacob.workers.dev/?size=10
```

[![EXAMPLE](https://fc.jacob.workers.dev/?size=10)](https://fc.jacob.workers.dev/?size=10)

### `font` || `f`
- default: `"baloo"`

#### baloo
```md
https://fc.jacob.workers.dev/?font=baloo
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=baloo)](https://fc.jacob.workers.dev/?font=baloo)

#### roboto
```md
https://fc.jacob.workers.dev/?font=roboto
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=roboto)](https://fc.jacob.workers.dev/?font=roboto)

#### vt323
```md
https://fc.jacob.workers.dev/?font=vt323
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=vt323)](https://fc.jacob.workers.dev/?font=vt323)

#### barcode
```md
https://fc.jacob.workers.dev/?font=barcode
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=barcode)](https://fc.jacob.workers.dev/?font=barcode)

#### codystar
```md
https://fc.jacob.workers.dev/?font=codystar
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=codystar)](https://fc.jacob.workers.dev/?font=codystar)

#### rampart
```md
https://fc.jacob.workers.dev/?font=rampart
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=rampart)](https://fc.jacob.workers.dev/?font=rampart)

#### pacifico
```md
https://fc.jacob.workers.dev/?font=pacifico
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=pacifico)](https://fc.jacob.workers.dev/?font=pacifico)

#### rajdhani
```md
https://fc.jacob.workers.dev/?font=rajdhani
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=rajdhani)](https://fc.jacob.workers.dev/?font=rajdhani)

#### patrick
```md
https://fc.jacob.workers.dev/?font=patrick
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=patrick)](https://fc.jacob.workers.dev/?font=patrick)

#### damion
```md
https://fc.jacob.workers.dev/?font=damion
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=damion)](https://fc.jacob.workers.dev/?font=damion)

#### windsong
```md
https://fc.jacob.workers.dev/?font=windsong
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=windsong)](https://fc.jacob.workers.dev/?font=windsong)

#### fredericka
```md
https://fc.jacob.workers.dev/?font=fredericka
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=fredericka)](https://fc.jacob.workers.dev/?font=fredericka)

#### geo
```md
https://fc.jacob.workers.dev/?font=geo
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=geo)](https://fc.jacob.workers.dev/?font=geo)

#### gaegu
```md
https://fc.jacob.workers.dev/?font=gaegu
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=gaegu)](https://fc.jacob.workers.dev/?font=gaegu)

#### paprika
```md
https://fc.jacob.workers.dev/?font=paprika
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=paprika)](https://fc.jacob.workers.dev/?font=paprika)

#### reggae
```md
https://fc.jacob.workers.dev/?font=reggae
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=reggae)](https://fc.jacob.workers.dev/?font=reggae)

#### milonga
```md
https://fc.jacob.workers.dev/?font=milonga
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=milonga)](https://fc.jacob.workers.dev/?font=milonga)

#### ruthie
```md
https://fc.jacob.workers.dev/?font=ruthie
```

[![EXAMPLE](https://fc.jacob.workers.dev/?font=ruthie)](https://fc.jacob.workers.dev/?font=ruthie)

#### More Fonts?
Please Request by Creating Issue or PR.

## Privacy Policy
**This API should not store any data.** 

Your IP address is not stored. It is only used to generate the picture.

## Deploy By Yourself
It is possible to deploy this API to your own server or any serverless platform.

> To deploy the API on Cloudflare Worker, you can [`fork`](https://github.com/JacobLinCool/Full-Counter--IP-as-Picture-API/fork) this repository, add your Cloudflare API Token (name it `CF_API_TOKEN`) to `Repository Secret`, and run the `Deploy Worker` GitHub Action.

You can also use the code in `dist/worker.js`, which is already packed by webpack.

## That's Not My IP!
If the IP address is not yours, it may be because you are using a proxy or VPN.

AND, it **cannot** be use on GitHub README because GitHub requests the pictures from their server, not from your IP. (So it actually shows the IP address of GitHub's server.)

## License
MIT LICENSE

Check the [LICENSE](https://github.com/JacobLinCool/Full-Counter--IP-as-Picture-API/blob/main/LICENSE) file.