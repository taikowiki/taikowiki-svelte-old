import { runQuery } from '@sveltekit-board/db';

export async function load(){
    return {
        gamecenter: await getGamecenter()
    }
}

async function getGamecenter(){
    let result;
    try{
        result = await runQuery(async (run) => {
            return await run("SELECT `region`, `name`, `machine`, `price`, `phone`, `address`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`, `water`, `restroom`, `parking`, `capture`, `rental`, `night`, `ATM`, `fan` FROM `gamecenter`");
        })
    }
    catch(err){
        throw err;
    }
    return JSON.parse(JSON.stringify(result))
}