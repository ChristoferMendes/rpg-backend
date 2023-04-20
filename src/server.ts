import { app } from "./app";
import { routes } from "./shared/routes";
import { config } from "dotenv";
config()

app.use(routes)

const PORT = 4000;
app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`))
