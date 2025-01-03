exports.get = async (req, res) => {
  try {
    res.status(200).json({
      message: "Recruitments fetched successfully",
      data: [
        {
          name: "shampoo",
          price: 1000,
        },
        {
          name: "soap",
          price: 523,
        },
        {
          name: "sofa",
          price: 1000000,
        },
      ]
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}