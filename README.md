# knitting ipsum

[it's a thing that is real](http://knitsum.feministy.io/).

## git-crypt

1. get the key.txt file from the place it lives
2. run `git-crypt unlock /path/to/keyfile`
3. magic

## deploy

1. make sure you've unlocked the encrypted files
2. run `./build.sh`
3. magic

## develop

1. run `compass watch`
2. if you want the fonts to load, run `python -m SimpleHTTPServer 8000` and load localhost:8000 in the browser

