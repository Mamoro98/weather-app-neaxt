import React from "react";
import * as https from "https";
import axios from "axios";
const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // (NOTE: this will disable client verification)
});

export default axios.create({ httpsAgent });
