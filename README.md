# Unimport TSX Bug

Run `node index.mjs` and it will throw an error:

```
$ node index.mjs
node:internal/process/esm_loader:97
    internalBinding('errors').triggerUncaughtException(
                              ^

[Error: EISDIR: illegal operation on a directory, read] {
  errno: -21,
  code: 'EISDIR',
  syscall: 'read'
}

Node.js v18.16.1
```
