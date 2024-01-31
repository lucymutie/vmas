// deno-lint-ignore-file
// || "postgres"  || "vma" ||"localhost" ||"vlmmercy3256#"

// import "https://deno.land/x/dotenv@v3.0.0/load.ts";



// const vlmdata = {
//     user: Deno.env.get('DB_USERNAME') || "postgres" ,
//     database: Deno.env.get('DB_DATABASE') || "vmatop",
//     hostname: Deno.env.get('DB_HOST') ||"localhost",
//     password: Deno.env.get('DB_PASSWORD') ||"vlmmercy3256#",
//     port: Deno.env.get('DB_PORT')|| 5432
// }

const vlmdata = {
    user: "postgres" ,
    database: "vlmdb",
    hostname: "localhost",
    password: "vlmlucy3256#",
    port: 5432
}
// console.log(vlmdata);
export {vlmdata}