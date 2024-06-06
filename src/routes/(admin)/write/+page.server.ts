import { redirect } from "@sveltejs/kit";
import { runQuery } from "@sveltekit-board/db";
import { config } from "dotenv";

config();

export async function load({url}){
    let order = url.searchParams.get('order');

    if(order){
        let noticeData = await runQuery(async (run) => {
            return await run("SELECT * FROM `notice` WHERE `order` = ?", [Number(order)])
        })
        
        if(noticeData[0]){
            return{
                noticeData: JSON.parse(JSON.stringify(noticeData[0]))
            }
        }
    }
}

export const actions = {
    default: async function(event){
        let formData = await event.request.formData();

        let order = formData.get('order');
        let title = formData.get('title') || '';
        let html = formData.get('html');
        let password = formData.get('password');
        let type = formData.get('notice_type') || 'official';
        let ip = event.getClientAddress();

        if(!title){
            return {
                error: '제목을 입력 해 주세요.',
                html: html || ''
            }
        }

        if(!password){
            return {
                error: '암호를 입력 해 주세요.',
                html: html || '',
                title
            }
        }

        if(password !== process.env.NOTICE_PASSWORD){
            return {
                error: '암호가 올바르지 않습니다.',
                html: html || '',
                title
            }
        }

        try{
            let submit;
            if(order){
                let exist = await runQuery(async(run) => {
                    return (await run("SELECT * FROM `notice` WHERE `order` = ?", [order]))[0]
                })

                if(exist){
                    await runQuery(async(run) => {
                        await run("UPDATE `notice` SET `type`=?, `title`=?,`content`=?,`date`=CURRENT_DATE(),`ip`=? WHERE `order` = ?", [type, title, html, ip, order])
                    })
                }
                else{
                    submit = await runQuery(async (run) => {
                        return await run("INSERT INTO `notice` (`type`, `title`, `content`, `link`, `date`, `ip`) VALUES (?, ?, ?, ?, CURRENT_DATE(), ?)", [type, title, html, '', ip])
                    });
                }
            }
            else{
                submit = await runQuery(async (run) => {
                    return await run("INSERT INTO `notice` (`type`, `title`, `content`, `link`, `date`, `ip`) VALUES (?, ?, ?, ?, CURRENT_DATE(), ?)", [type, title, html, '', ip])
                });
            }

            order = submit?.insertId;
        }
        catch(err){
            return {
                error: '에러가 발생했습니다.',
                html: html || '',
                title
            }
        }

        if(order){
            throw redirect(302, `/notice/${order}`);
        }
        else{
            throw redirect(302, '/');
        }
    }
}