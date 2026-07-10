import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import url from 'node:url';

const root = process.cwd();
const port = Number(process.env.PORT ?? 4175);
const host = '127.0.0.1';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8'
};

function resolveRequestPath(requestUrl) {
  const parsed = url.parse(requestUrl);
  const pathname = decodeURIComponent(parsed.pathname ?? '/');
  const relativePath = pathname === '/' ? 'viewer/index.html' : pathname.replace(/^\/+/, '');
  const fullPath = path.resolve(root, relativePath);
  if (!fullPath.startsWith(root)) return null;
  return fullPath;
}

const server = http.createServer((req, res) => {
  const fullPath = resolveRequestPath(req.url ?? '/');
  if (!fullPath) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(fullPath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(fullPath)] ?? 'application/octet-stream'
    });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Japanese Language Taxonomy viewer: http://${host}:${port}/`);
});
