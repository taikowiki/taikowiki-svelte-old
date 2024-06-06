import { runQuery } from "@sveltekit-board/db";

export async function load({params}){
    let order = Number(params.order);
    return {
        notice : await getNotice(order)
    }
}

async function getNotice(order:number){
    let notice:any[];
    try{
        notice = await runQuery(async (run) => {
            return await run("SELECT * FROM `notice` WHERE `order` = ?", [order])
        })
    }
    catch(err){
        throw err;
    }
    return JSON.parse(JSON.stringify(notice[0]))
}