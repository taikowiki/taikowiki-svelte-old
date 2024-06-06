import { runQuery } from '@sveltekit-board/db';

export async function load({params}){
    return {
        diffChart : await getDiffChart(params.level),
        songs : await getSongs()
    }
}

async function getDiffChart(level:string){
    let diff:any[] = [];
    try{
        diff = await runQuery(async (run) => {
            return await run("SELECT * FROM `diffchart/clear` WHERE `level` = ?", [level]);
        })
    }
    catch(err){
        throw err;
    }
    return JSON.parse(JSON.stringify(diff))
}

async function getSongs(){
    let diff:any[] = [];
    try{
        diff = await runQuery(async (run) => {
            return await run("SELECT `jpn_name`, `kor_name`, `alias`, `genre`, `song_no` FROM `songs`");
        })
    }
    catch(err){
        throw err;
    }
    return JSON.parse(JSON.stringify(diff))
}