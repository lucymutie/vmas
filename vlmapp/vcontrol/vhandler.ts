// deno-lint-ignore-file

import {Context,renderFileToString,yellow ,bold} from "./vlinks.ts";




export const vmaApp:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = "/" || ctx.request.hasBody == true){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vma.ejs`,{
            title:'vma@home'
        });

    }
    // console.log(ctx.request.url.username,vmasignup); 
}  

export const vmalog:any = async (ctx:Context,next:any)=>{
    if(ctx.request.url.pathname = "/vma@login"){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vpartial/vmalogin.ejs`,{title:'vma@login'});
    }    
} 
export const vmalogs:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = "/vma@logout"){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vpartial/vmalogout.ejs`,{title:'logout'});
    }    
} 

export const vmasignup:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = "/vma@signup"){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vpartial/vmasignup.ejs`,
        {
            title:'vma@signup',
        });
        
    }    
} 

export const vmadash:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = "/vma@dash"){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vpartial/vmadash.ejs`,{title:'vma@dash'});
    }    
} 

export const products:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = '/vma@products')
    ctx.response.body = await "products are here"
    console.log(bold(yellow(ctx.request.url.pathname)));
    
} 

// vlm time is here

const vlmdate = new Date();
const day = vlmdate.getDate();
const month = vlmdate.getMonth();
const year = vlmdate.getFullYear();
const hour= vlmdate.getHours();
const minute = vlmdate.getMinutes();
const vlmtime = day+'/'+month+'/'+year+' TIME'+'=>: '+hour+':'+minute;

export {vlmtime};

// check for auth
export function bon(ctx:any){
    if(ctx.request.method.includes(ctx.request.url.pathname = '/')){
        alert(ctx.throw(200, 'wallet not found'))
    }
}