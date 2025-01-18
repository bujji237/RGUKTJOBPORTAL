require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
    fullName: String,
    idNumber: String,
    email: String,
    phone: String,
    password: String,
    gender: String,
    role: String, 
});

const User = mongoose.model('User', userSchema);

// Signup API
app.post('/signup', async (req, res) => {
    const { fullName, idNumber, email, phone, password, gender, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = new User({
        fullName,
        idNumber,
        email,
        phone,
        password: hashedPassword,
        gender,
        role, 
    });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Login API
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('User not found');
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');
    const token = jwt.sign(
        { email: user.email, role: user.role },
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );
    res.json({ token });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
