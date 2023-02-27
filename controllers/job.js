const getJob = async (req, res) => {
  res.send("get Job");
};

const getAllJobs = async (req, res) => {
  res.send("getAllJobs");
};

const createJob = async (req, res) => {
  res.json(req.user);
};

const updateJob = async (req, res) => {
  res.send("update Job");
};

const deleteJob = async (req, res) => {
  res.send("Delete Job");
};

module.exports = {
  getAllJobs,
  getJob,
  updateJob,
  createJob,
  deleteJob,
};
