// //recupération des requêtes et utilisation de celle-ci


const { getTweets, createTweet, deleteTweet, getTweet, updateTweet, getCurrentUserTweetsWithFollowing } = require('../queries/tweets.queries');

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await getCurrentUserTweetsWithFollowing(req.user);
    res.render('tweets/tweet', { tweets, isAuthenticated: req.isAuthenticated(), currentUser: req.user, user: req.user, editable: true });
  } catch(e) {
    next(e);
  }
}

exports.tweetNew = async (req, res, next) => {
  const tweets = await getCurrentUserTweetsWithFollowing(req.user);
  const user = req.user.avatar;
  res.render('tweets/tweet-form', { tweet: {}, user, tweets, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
}

exports.tweetCreate = async (req, res, next) => {
  try {
    const body = req.body;
    const author = req.user._id;
    await createTweet({ ...body, author });//enregistrement du doc dans la bdd MongoDB et mongoose retourne une promesse
    res.redirect('/tweets');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    res.status(400).render('tweets/tweet-form', { errors, isAuthenticated: req.isAuthenticated(), currentUser: req.user });//modification de notre objet d'erreur pour avoir un tab pour itérer dessus dans les templates
  }
}

exports.tweetDelete = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getCurrentUserTweetsWithFollowing(req.user);
    res.render('tweets/tweet-list', { tweets, currentUser: req.user, editable: true });
  } catch(e) {
    next(e);
  }
}

exports.tweetEdit = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    const tweet = await getTweet(tweetId);
    res.render('tweets/tweet-form', { tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  } catch(e) {
    next(e);
  }
}

exports.tweetUpdate = async (req, res, next) => {
  const tweetId = req.params.tweetId;
  try {
    const body = req.body;
    await updateTweet(tweetId, body);
    res.redirect('/tweets');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    const tweet = await getTweet(tweetId);
    res.status(400).render('tweets/tweet-form', { errors, tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  }
}
