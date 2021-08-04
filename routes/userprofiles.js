const express = require('express')
const router = express.Router()
const db = require('../firebaseConnect.js')
const userProfiles = db.collection('userProfiles')

router.get('/', async (req, res) => {
  let profiles = []

  const profileData = await userProfiles
    .orderBy('first_name', 'desc')
    .get()

  profileData.forEach(profile => {
    let setProfile = {
      'id': profile.id,
      ...profile.data()
    }
    profiles.push(setProfile)
  })

  res.json(profiles)
})

router.post('/', async (req, res) => {
  let newProfile = {
    ...req.body
  }
  userProfiles.doc().set(newProfile)
  res.json(newProfile)
})

router.put('/:id', async (req, res) => {
  let id = req.params.id
  let profileDoc = userProfiles.doc(id.trim())
  let profileUpdate = { ...req.body }
  await profileDoc.update(profileUpdate)

  res.json(profileUpdate)
})

router.delete('/:id', async (req, res) => {
  let id = req.params.id
  await userProfiles.doc(id.trim()).delete()
  res.json({ 'msg': 'delect successful!!' })
})


module.exports = router
