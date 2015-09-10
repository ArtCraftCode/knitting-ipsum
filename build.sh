compass compile -e production --force
cp -r stylesheets/ build/stylesheets/
cp app.js build/app.js
cp index.html build/index.html
cp knitting.svg build/knitting.svg

s3_website push