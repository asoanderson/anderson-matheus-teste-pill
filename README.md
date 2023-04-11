# Pill Test

Integration with api football-data using campeonato brasileiro série A data.

## Requirements
- Node >= v16.16.0
- Npm >= 8.11.0

### Clone repository
```
git clone git@github.com:anderson-matheus/pill-test.git
```

### Configure .env in server
```
cd pill-test/server
sudo cp .env.example .env
```

#### Update .env vars
```
API_URL="http://api.football-data.org/v4"
TOKEN="XXXX"
```

### Install server
```
cd pill-test/server
npm install
npm run dev
```

### Install client
```
cd pill-test/client
npm install
npm start
```

### Url's
- Server url: [http://localhost:5000/api/matches](http://localhost:5000/api/matches)
- Client url: [http://localhost:3000](http://localhost:3000)

### Home page
![Home page](/images/home.png "Home page")

### Matches page
![Matches page](/images/matches.png "Matches page")