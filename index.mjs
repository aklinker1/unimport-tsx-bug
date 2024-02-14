import { createUnimport } from "unimport";

const res = await createUnimport({}).scanImportsFromDir(["components"]);
console.log(res);
