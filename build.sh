# esperanto -i src/app.js -b > app.es6 -s -t umd -n mohican
babel src/app.js --out-file app.js --modules common --optional runtime
