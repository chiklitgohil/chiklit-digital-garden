const fs = require('fs');

const bp = "/garden";
const bpRegexStr = bp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let jsonStr = '{"homeAlias":"/","nodes":{"/notes/ai-ml-guide/":{"url":"/notes/ai-ml-guide/"}}}';

const regex = new RegExp(`"\\/(?!\\/)(?!${bpRegexStr}\\/)([^"\\n]*)"`, 'g');
jsonStr = jsonStr.replace(regex, `"${bp}/$1"`);

const exactRoot = new RegExp(`"\\/"`, 'g');
jsonStr = jsonStr.replace(exactRoot, `"${bp}/"`);

console.log(jsonStr);

let scriptText = "fetch('/graph.json') and fetch(\"/searchIndex.json\")";
scriptText = scriptText.replace(/fetch\(['"]\/(?!\/)/g, match => {
  const quote = match[6];
  return `fetch(${quote}${bp}/`;
});
console.log(scriptText);
