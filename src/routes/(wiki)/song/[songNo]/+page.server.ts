import { runQuery } from '@sveltekit-board/db';
import { error } from '@sveltejs/kit';

export async function load({params}){
    const songNo = params.songNo;
    let song = await getSongByNo(Number(songNo))
    let attributes = await getAttributes(song.jpn_name);
    return {
        song,
        chart:await getDiffChartClear(Number(songNo)),
        attributes
    }
}

async function getSongByNo(songNo:number){
    let song:any[];
    try{
        song = await runQuery(async(run) => {
            return await run("SELECT * FROM `songs` WHERE `song_no` = ?", [songNo]);
        })
    }
    catch(err){
        console.log(err);
        throw error(500);
    }
    return JSON.parse(JSON.stringify(song[0]));
}

async function getDiffChartClear(songNo:number){
    let chart:any[];
    try{
        chart = await runQuery(async(run) => {
            return await run("SELECT * FROM `diffchart/clear` WHERE `song_no` = ?", [songNo])
        })
    }
    catch(err){
        console.log(err);
        throw error(500);
    }
    return JSON.parse(JSON.stringify(chart));
}

async function getAttributes(jpnName:string){
    let attributes:any[];
    try{
        attributes = await runQuery(async(run) => {
            return await run("SELECT * FROM `attributes` WHERE `jpnName` = ?", [jpnName])
        })
    }
    catch(err){
        console.log(err);
        throw error(500);
    }
    return JSON.parse(JSON.stringify(attributes));
}