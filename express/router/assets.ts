import {Router} from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get(/\/assets\/(.*?)/, (req, res) => {
    let filePath = `./express${decodeURI(req.path)}`;

    if(!fs.existsSync(filePath)){
        res.status(404);
        res.send();
        res.end();
    }
    else if(fs.lstatSync(filePath).isDirectory()){
        res.status(404);
        res.send();
        res.end();
    }
    else{
        let stream = fs.createReadStream(filePath);
        res.type(path.extname(filePath));
        stream.pipe(res);
    }
    
})

export default router;