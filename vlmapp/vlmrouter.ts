// deno-lint-ignore-file
import {RouterContext} from "./vcontrol/vlinks.ts";
import {vlmform} from "./vcontrol/vdb/user.ts";
import {bcrypt} from "./vcontrol/vlinks.ts";
import {vlmtime} from "./vcontrol/vhandler.ts";


export const vmapost = async (ctx:RouterContext)=>
{
  if(ctx.request.hasBody){
    const vbody =  ctx.request.body({type: 'form'});
    const vlmvalue = await vbody.value
    const username = vlmvalue.get('name');
    const username1 = vlmvalue.get('sname');
    const email = vlmvalue.get('email');
    const phonenumber = vlmvalue.get('phone');
    // const password = vlmvalue.get('password');
    const vlmhash = bcrypt.hashSync('password')
  
    const vdata = await JSON.stringify(vlmform(vlmtime,username,username1,email,phonenumber,vlmhash));
    // if(vdata == null|| undefined){
    //   ctx.throw(400,'no data found')
    // }
    ctx.response.redirect('/vma@login')

  }




}



