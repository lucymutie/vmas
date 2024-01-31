// deno-lint-ignore-file
import {Application,Router,send} from "./vlmapp/vcontrol/vlinks.ts";
import {vmasignup,vmalog, vmadash, vmaApp,products,bon} from "./vlmapp/vcontrol/vhandler.ts";
import {red,bold,green,cyan,magenta,white} from "./vlmapp/vcontrol/vlinks.ts";
import {vmapost} from "./vlmapp/vlmrouter.ts";

const vlm = new Application();
const vlmrouter = new Router();


// vlm api are here 
vlmrouter
// .post('/vma@login', login)
.post('/vma@signup', vmapost)
.get('/vma@signup', vmasignup)
.get('/', vmaApp)
.get('/vma@products', products)
.get('/vma@login', vmalog)
.get('/vma@dash', vmadash)
.get('/vma@admin', vmadash)

.get('/vfav/:file', async (ctx:any) => {
  const vfile = await ctx.params.file;
  await send(ctx, ctx.request.url.pathname,{
    root: `${Deno.cwd()}`,
    index: vfile
  })
})
.get('/vjs/:file', async(ctx:any)=>{
	const vfile = ctx.params.file
    await send(ctx, ctx.request.url.pathname, {
		root: `${Deno.cwd()}`,
		index: vfile,
	  });
})
.get('/vcss/:file', async(ctx:any)=>{
	const vfile = ctx.params.file
    await send(ctx, ctx.request.url.pathname, {
		root: `${Deno.cwd()}`,
		index: vfile,
	  });
})
.get('/vimg/:file', async(ctx:any)=>{
	const vfile = ctx.params.file
    await send(ctx, ctx.request.url.pathname, {
		root: `${Deno.cwd()}`,
		index: vfile,
	  });
})
;
// Logger
vlm.use(async (ctx:any, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(green(`${ctx.request.method} ${ctx.request.url} - ${rt}`));
  });
  
  // Timing
vlm.use(async (ctx:any, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  });


vlm.use(vlmrouter.routes());
vlm.use(vlmrouter.allowedMethods());


vlm.use(bon);

const port = 9008
const vlmhost = "127.0.0.1";
vlm.listen({port: port});
console.log(bold(magenta(`VLM`)),cyan((`server is running...:)`)),green(`http://${vlmhost}:${port}`))