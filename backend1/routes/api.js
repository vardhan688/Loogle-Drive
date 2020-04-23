const express = require('express');
const fileSystem = require('fs');
const path = require('path');

const File= require('../models/file');

const router = express.Router()

router.get('/pdf/list-all', function(req, res, next){
    File.find({}).then(function(file){
        res.send(file);
    }).catch(next);
});

router.get('/pdf/:id', function(req, res, next){
    try{
        File.findOne({_id: req.params.id}, function(err, qfile){
            res.send(qfile);
        }).catch(next);       
    }
    catch{
        res.status(500).send('Internal Server Error');
    }
});

router.get('/pdf/download/:id', function(req, res, next){
    try{
        File.findOne({_id: req.params.id}, function(err, qfile){
            res.download('data/pdf/' + String(qfile.name));
        }).catch(next);       
    }
    catch{
        res.status(500).send('Internal Server Error');
    }
});

router.post('/pdf/upload', function(req, res, next){
    try{
        if(!req.files){
            res.send({
                status: false,
                message: 'File not uploaded'
            })
        }
        else{
            let file = req.files.pdf;

            file.mv('data/pdf/' + file.name);

            file_header = {
                name: file.name,
                mimetype: file.mimetype,
                size: file.size
            }
            File.create(file_header).then(function(file){
                res.send({
                    status: 200,
                    message: 'Uploaded'
                });
            }).catch(next);

        }
    }
    catch{
        res.status(500).send('Internal Server Error');
    }
});

router.put('/pdf/update/:id', function(req, res, next){
    try{
        File.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, qfile){
            fileSystem.renameSync('data/pdf/'+qfile.name, 'data/pdf/'+req.body.name);
            res.send({
                status: 200,
                message: 'Updated'
            });
        }).catch(next);
    }
    catch{
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/pdf/delete/:id', function(req, res, next){
    File.findByIdAndRemove({_id: req.params.id}, function(err, qfile){
        fileSystem.unlinkSync('data/pdf/'+qfile.name);
    }).catch(next);
    res.send({
        status: 200,
        message: 'Deleted'
    })
});

module.exports = router;