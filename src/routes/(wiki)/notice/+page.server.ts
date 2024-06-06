import { runQuery } from "@sveltekit-board/db";

export async function load(){
    return{
        notice: await getNotice()
    }
}

async function getNotice(){
    let notice;
    try{
        notice = await runQuery(async(run) => {
            return await run("SELECT `order`, `type`, `title`, `date` FROM `notice` ORDER BY `order` DESC")
        })
    }
    catch(err){
        throw err;
    }
    return JSON.parse(JSON.stringify(notice))
}