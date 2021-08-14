const router = require('express').Router();
let TeamDetails = require('../models/TeamDetails');

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const position = req.body.position;
    const image = req.body.image;
    const date = new Date().toISOString().slice(0,10);

    const newTeamDetails = new TeamDetails({
        name,
        position,
        image,
        date
    });

    newTeamDetails.save()
        .then(() => res.json("Team member added successfully"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/view').get((req,res) => {
    TeamDetails.find()
        .then(TeamDetails => res.json(TeamDetails))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/delete/:id').delete(async (req,res) => {
    let id = req.params.id;
    await TeamDetails.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Successfully deleted team member."});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while deleting.", error: err.message});
    }); 
});

router.route('/update/:id').post(async (req,res) => {
    let id = req.params.id;
    const name = req.body.name;
    const position = req.body.position;
    const updateTeamDetails={
        name,
        position,
    }
    const update = await TeamDetails.findOneAndUpdate({_id:id},updateTeamDetails).then(() => {
        res.status(200).send({status: "Successfully updated team member"});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while updating team member.", error: err.message});
    });
});

module.exports = router;