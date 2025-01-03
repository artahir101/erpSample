exports.get = async (req, res) => {
  try {
    res.status(200).json({
      message: "talents fetched successfully",
      data: [
        "critical thinking",
        "communication"
      ]
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}