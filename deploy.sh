git stash
git checkout master
git fetch
git pull origin HEAD
bower update
gulp compile
gulp bump

git log --oneline --decorate > CHANGELOG.txt
git add --all :/
git commit -m "Tagged Deployment"

gulp tag

git push
git push --tags
