import {runQuery} from '@sveltekit-board/db';

export async function load(){

    return{
        songs: await get3Songs(),
        notice: await getNotice(),
        wikiNotice : await getWikiNotice()
    }
}

async function getNotice(){
    let notices:any[] = [];
    try{
        notices = await runQuery(async(run) => {
            return await run("SELECT `title`, `order` FROM `notice` WHERE `type` = 'official' ORDER BY `order` DESC LIMIT 3;");
        })
    }
    catch(err){
        throw err;
    }
    return JSON.parse(JSON.stringify(notices))
}

async function getWikiNotice(){
    let notices:any[] = [];
    try{
        notices = await runQuery(async (run) => {
            return await run("SELECT `title`, `order` FROM `notice` WHERE `type` = 'wiki' ORDER BY `order` DESC LIMIT 3;")
        })
    }
    catch(err){
        throw err;
    }
    return JSON.parse(JSON.stringify(notices))
}

async function get3Songs(){
    let result;
    try{
        result = await runQuery(async (run) => {
            return await run("SELECT `genre`, `jpn_name`, `song_no` FROM `songs` WHERE `version` LIKE '%|1|%' ORDER BY RAND() LIMIT 3;");
        })
    }
    catch(err){
        throw err;
    }
    return JSON.parse(JSON.stringify(result))
}