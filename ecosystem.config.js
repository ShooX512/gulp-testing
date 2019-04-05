module.exports = {
  apps: [{
    name: 'Stewpot',
    script: 'app.js',
    log_type: 'json',
    log_date_format: 'DD-MM-YYYYTHH:MM:SS',
    output: './logs/out.log',
    error: './logs/error.log',
    merge_logs: true,
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    ignore_watch: ["node_modules", "app/themes/inProgress", "app/themes/originals", "app/css/components", "app/css/pageComponents", "app/css/pages", "app/scrapedJSON", "app/js/", "app/js/global", "app/js/libs", "app/js/js", "dist", "public", "logs"],
    max_memory_restart: '8G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'pc62',
      host: '10.10.10.154',
      ref: 'origin/master',
      repo: 'https://github.com/ShooX512/gulp-testing.git',
      path: './',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
