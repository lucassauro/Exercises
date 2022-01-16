const { readFiles, writeFiles } = require('./4_functions.js');

async function postTeams(req, res) {
  const { name, initials, country, league } = req.body;
  const teams = await readFiles()
  
  if(name.match(/\w{5,}/i) && initials.match(/[\D]{1,3}/) && country.match(/\w{4,}/i)) {
    const obj = { name, initials, country, league };
    teams.push(obj)
    await writeFiles(JSON.stringify(teams))
    return res.status(201).json(obj);
  }
  res.status(400).json({ message: 'Invalid data!' });

}

async function getTeams(req, res) {
  const teams = await readFiles();
  if (teams.length < 1) return res.status(200).json({ teams });
  res.status(200).json(teams);
}

module.exports = {
  postTeams,
  getTeams,
}