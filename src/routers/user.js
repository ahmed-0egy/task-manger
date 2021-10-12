const express = require('express')
const router = new express.Router()
const User = require('../models/user')

// CRUD operations

router.post('/users', (req, res) => {
    // console.log(req.body)
    const user = new User(req.body)
    user.save().then(() => {
        res.status(200).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

router.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.status(200).send(users);
    }).catch((e) => {
        res.status(500).send(e);
    })
});

router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id).then((user) => {
        if (!user)
            return res.status(400).send('Unable to find user');
        res.status(200).send(user);
    }).catch((error) => {
        res.status(500).send('Unable to connect to database' + error);
    })
});

router.patch('/users/:id', async(req, res) => {
    const allowedUpdates = ['name', 'password'];
    const updates = Object.keys(req.body);
    if (!updates.every((update) => allowedUpdates.includes(update)))
        return res.status(400).send('you are only allowed to update ' + allowedUpdates);

    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (!user)
            return res.status(400).send('User not found');
        console.log(user);
        allowedUpdates.forEach((update) => user[update] = req.body[update]);
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send('error '+e);
    };
});

router.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user)
            return res.status(400).send('user not found');
        res.status(400).send(user);
    } catch (e) {
        res.status(500).send(e);
    }

})
module.exports = router;