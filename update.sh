# Update from github and restart
git stash # Stash local repo
git pull # Update local repo
npm install # Update local node modules if necessary
npm run build # Create optimized build for production
chmod +x update.sh # Update file permissions 
