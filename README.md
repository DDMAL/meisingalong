# mei-singalong 😮🎤

web app to present salzinnes manuscript alongside recordings with karaoke-esque follow along.

## set up 👷‍♀️🚧

__overview:__ meisingalong is served locally with nginx and an iipimage server.

### installation ⚙️🔧
install nginx with homebrew.

clone this repo.

```
git clone https://github.com/DDMAL/meisingalong.git
```

### set up nginx server 
replace `<PATH-TO>` in meisingalong.conf with absolute path to salzinnes-singalong.
copy paste __nginx config file__ _(meisingalong.conf)_ into ___nginx server config folder___ _(/usr/local/etc/nginx/servers/)_.
```
# cli option
cp <path-to>/meisingalong.conf /usr/local/etc/nginx/servers/
```

_things to consider:_ 🤔
- homebrew will be located elsewhere for silicon macs. 
- if nginx server config folder doesn't exist, make it and make sure the main `nginx.conf` contains `include servers/*;` in the http scope. 

start nginx server.
```
sudo nginx
```

### set up iipimage server
run `startup.sh` script to set env variables and start the iipimage server on port 9000.
```
cd <path-to-folder>/iip
./startup.sh
```

leave server running.

### rejoin large manuscript .tif files
because github has a 100mb file limit, the manuscripts were split into chunks to upload into the repo. run the python rejoin scripts to get them back together!

```
bash scripts/rejoin_manuscripts.sh
```
_or..._ just load the manuscripts from a thumbdrive and place them in `iip/images/singalong`.


### run
with iipimage and nginx servers up and running, open browser of choice and go to `localhost:9001`. enter full screen and hide tab bar and violà.

_for chrome, hiding the tab bar is_ cmd ⌘ + shift ⇧ + F _once in fullscreen._
