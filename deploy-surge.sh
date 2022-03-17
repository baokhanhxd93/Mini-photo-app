# Build reactjs app with productiuon mode
npm run build

# Go to build folder
cd build

# Clone index.html tinto 200.html
cp index.html 200.html

# Start deploying via Surge

surge . new-photo-app.surge.sh