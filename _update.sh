jekyll build
zip -r _archives/site.zip _site
scp _archives/site.zip me:/tmp/
ssh me
