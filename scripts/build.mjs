import { execSync } from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function exec(cmd) {
  execSync(cmd, {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' },
  });
}

const cwd = process.cwd();

// Note: We don't currently have a build step for react-router-native.
// Instead, we use the source files directly.
['use-less'].forEach(packageName => {
  process.chdir(path.resolve(__dirname, '../packages/' + packageName));
  exec('yarn build');
});

process.chdir(cwd);
