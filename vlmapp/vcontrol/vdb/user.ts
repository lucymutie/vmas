// deno-lint-ignore-file
import {Client} from "../vlinks.ts";
import {vlmdata} from "./vdb.ts";

const vlmclient = new Client(vlmdata);
try {
    await vlmclient.connect();
    console.log('vlm database is connected')
    await vlmclient.queryArray(`CREATE TABLE IF NOT EXISTS vmausers (
        id BIGSERIAL PRIMARY KEY NOT NULL,
        vlmtime VARCHAR(25) NOT NULL,
        firstname VARCHAR(200) NOT NULL,
        lastname VARCHAR(200) NOT NULL,
        email VARCHAR(200) NOT NULL,
        phonenumber VARCHAR(20) NOT NULL,
        vlmhash VARCHAR(350) NOT NULL
        );
    `);
} catch (error) {
    console.log(error)
    await vlmclient.end();
}

const vlmform = async (vlmtime:string|null,firstname:string|null,lastname:string|null,email:string|null,phonenumber:string|null,vlmhash:string|null) =>{
    try {
        await vlmclient.connect();
        console.log('open to accept user inputs')
        await vlmclient.queryArray(`INSERT INTO vmausers 
        (
            vlmtime
            ,firstname
            ,lastname
            ,email
            ,phonenumber
            ,vlmhash
            ) 
            VALUES
            (
                '${vlmtime}',
                '${firstname}',
                '${lastname}',
                '${email}',
                '${phonenumber}',
                '${vlmhash}');
                `)
    } catch (error) {
        await vlmclient.end();
        console.log(error)
    }
}

export {vlmform};