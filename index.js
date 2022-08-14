const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  console.log(name);

  if (name == "dog") {
    res.send(
      "<img src='https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg'>"
    );
  } else if (name == "cat") {
    res.send(
      "<img src='https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg'>"
    );
  } else if (name == "pig") {
    res.send(
      "<img src='https://cdn.pixabay.com/photo/2013/08/12/18/10/staniel-cay-171908_960_720.jpg'>"
    );
  } else if (name == "duck") {
    res.send(
      "<img src='https://cdn.pixabay.com/photo/2018/07/08/18/09/mallard-3524390_960_720.jpg'>"
    );
  } else if (name == "rabbit") {
    res.send(
      "<img src='https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_960_720.jpg'>"
    );
  } else {
    res.send(
      "<img src='https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg'>"
    );
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
