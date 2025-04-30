const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const migrationName = process.argv[2];

if (!migrationName) {
  console.error('Please provide a migration name.');
  process.exit(1);
}

execSync(
  `ts-node ./node_modules/typeorm/cli migration:create ./migrations/${migrationName}`,
  { stdio: 'inherit' },
);

// Rename the generated migration file to remove the timestamp
const migrationsDir = path.resolve(__dirname, 'migrations');
const files = fs.readdirSync(migrationsDir);
const generatedFile = files.find(file => file.includes(migrationName));

if (generatedFile) {
  const newFileName = `${migrationName}.ts`;
  fs.renameSync(
    path.join(migrationsDir, generatedFile),
    path.join(migrationsDir, newFileName)
  );
  console.log(`Migration file renamed to: ${newFileName}`);
} else {
  console.error('Migration file not found.');
}