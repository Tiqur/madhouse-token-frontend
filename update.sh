# Update from github and restart
pkill -9 -f serve # Kill previous running webserver
git stash # Stash local repo
git pull # Update local repo
npm install # Update local node modules if necessary
npm run build # Create optimized build for production
serve -s build & # Serve optimized build in background process
