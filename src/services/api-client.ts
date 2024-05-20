import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'913fb3502e05475f93c89f5024d6fb81'
    }
})