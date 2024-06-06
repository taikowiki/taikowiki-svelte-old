import { runQuery } from '@sveltekit-board/db';

export async function load(){
    return {
        songs: await getSongs()
    }
}

async function getSongs(){
    let songs;
    try{
        songs = await runQuery(async(run) => {
            return await run("SELECT * FROM `songs` WHERE VERSION LIKE '%|1|%'");
        })
    }
    catch(err){
        throw err;
    }

    return JSON.parse(JSON.stringify(songs))
}