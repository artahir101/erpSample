exports.get = async (req, res) => {
  try {
    res.status(200).json({
      message: "Recruitments fetched successfully",
      data: [
        {
          name: "Ali",
          skills: ["web development"]
        },
        {
          name: "Hamza",
          skills: ["mobile development"]
        }
      ]
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}