const importUser = async (req, res) => {
  try {
    res.send({ status: 200, success: true, msg: "CSV Uploaded" });
  } catch (error) {
    res.send({ status: 400, success: false, msg: error.message });
  }
};

module.exports = { importUser };
// const importUser = async (req, res) => {
//   try {
//     res.send({ status: 200, success: true, msg: "Sucess" });
//   } catch (error) {
//     res.send({ status: 400, success: false, msg: "error" });
//   }
// };

// module.exports = {
//   importUser,
// };
