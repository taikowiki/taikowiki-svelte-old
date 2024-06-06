import { runQuery } from "@sveltekit-board/db";
import { error } from "@sveltejs/kit";

export async function load(){
    return{
        terms: await getTerms()
    }
}

async function getTerms(){
    let terms:Term[];
    try{
        terms = await runQuery(async(run) => {
            return await run("SELECT * FROM `terms`")
        })
    }
    catch(err){
        console.log(err);
        throw error(500)
    }

    //terms를 글자순으로 정렬
    terms.sort((a, b) => {
        if(a.kor < b.kor) return -1;
        if(a.kor > b.kor) return 1;
        return 0;
    })
    let T:any = {};
    terms = terms.map(e => {
        return JSON.parse(JSON.stringify(e));
    })
    await Promise.all(terms.map(async (e) => {
        await pushTerm(T, e);
    }))

    let t = [];
    for(let key in T){
        t.push(T[key])
    }
    return t;
}

async function pushTerm(list:any, term:Term){
    let firstLetter = getFirstLetter(term.kor).code;
    if(!list[firstLetter]){
        list[firstLetter] = {
            letter: getFirstLetter(term.kor).jaEum,
            list: []
        };
    }
    list[firstLetter].list.push(term);
    let songMatch = [...term.explanation.matchAll(/\[\[(.*?)\]\]/g)];
    for(let i = 0; i < songMatch.length; i++){
        let e = songMatch[i];
        term.explanation = term.explanation.replace(e[0], `<a href="/song/${await getsongNoByJpnName(e[1])}" style="color:blue;">${e[1]}</a>`);
    }
    return null;
}

function getFirstLetter(kor:string) {
    const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
               'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
               'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    const ga = 44032;
    let uni:number = kor.charCodeAt(0);

    uni = uni - ga;

    let fn = parseInt((uni / 588).toString());

    if(fn == 8){
        fn = 7;
    }
    if(fn == 10){
        fn = 9;
    }

    return {
        jaEum:f[fn]||'A',
        code:fn
    }
}

async function getsongNoByJpnName(jpnName:string){
    let songNo:any[]
    try{
        songNo = await runQuery(async(run) => {
            return await run("SELECT `song_no` FROM `songs` WHERE `jpn_name` = ?", [jpnName]);
        })
    }
    catch(err){
        console.log(err);
        throw error(500)
    }
    return songNo[0]?.song_no || '';
}

interface Term{
    kor:string
    jpn?:string
    explanation:string
}