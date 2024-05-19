import axios from "axios";

const Api = axios.create({
    baseURL: "https://api.homologation.cliqdrive.com.br",
    headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json',
      },
})

export default Api;