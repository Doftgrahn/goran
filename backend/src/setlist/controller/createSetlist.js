const Setlist = require('../setlistModel/setlist')

module.exports = async function createSetlist(req, res) {
  const { userId, title, user, _id } = req.body
  const newBoard = new Setlist({
    _id: _id,
    userId: userId,
    user: user,
    title: title,
    date: Date.now(),
    isOwner: true
  })
  const setlist = await newBoard.save()
  res.json(setlist)
}
