import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://sfo.cloud.appwrite.io/v1")
    .setProject("695beef7000e26dc5128");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
