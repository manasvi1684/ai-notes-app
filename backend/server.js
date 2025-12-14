// 🔴 MUST be the very first import
import "./src/config/env.js";

import app from "./src/app.js";

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
