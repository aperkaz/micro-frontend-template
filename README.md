# micro-frontend-template 🟢🔦

Technical foundation to build, deploy, compose and manage distributed frontend apps with module federation.

## Features

The following areas will be addressed (but not limited to), either within the template or as supportive tooling:

- Communication: between micro-frontends and the host app. Not all micro-frontends may use module-federation.
- Runtime error management: tracing, observabilty, isolating crashes...
- Developer experience: typescript support, proxying between environments... how to keep a good DX. 
- Service discovery: runtime discovery of available services to compose
- Versioning: how to automatically version new releases and keep track of the deployed service graph (could be a tool).
- Deployments: micro-frontend deployments, health checks, source-maps, iframing legacy apps, preferred process and needed environments...
- Performance: bundle-sizes, and other relevant metrics (e.g. TTI).
- Testing: e2e, contract, unit... in a distributed context.
- CI pipelines: encourage non-breaking APIs and best practices in a distributed environment. May not be applicable, but worth looking into it nonetheless.
- ...

## Reference material (books, papers, articles)

- [Building Micro-Frontends](https://www.amazon.com/Building-Micro-Frontends-Projects-Empowering-Developers/dp/1492082996/ref=sr_1_1?crid=1TL3UH4TZ2B1Y&dib=eyJ2IjoiMSJ9.-NFWnjb54zvD3j6UcIcVJrZef17Qr8dTl9EvUq_np5YArlLF52QrYnYk6eQ2r2zcSy1HIQuaHh_piP24ZN4B1kfQjfE6jvzUkpXaSbIFkooNDF-H0IYgucPnK_njd768.adrL2FiHhthmdpBAbYeeZrhQYx5VPQ2F-ejuDMw9Ep4&dib_tag=se&keywords=building+micro+frontend&qid=1715592749&sprefix=building+microfrontend%2Caps%2C241&sr=8-1)
- ...