const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manger-api',
{useNewUrlParser:true})

////////////////////////////////////////////////////////////////////////////////////

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
